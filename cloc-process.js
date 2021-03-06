`use strict`

const fs = require('fs')
const download = require('download-git-repo');
const prompt = require('prompt');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const cp  = require('child_process');
const nodemailer = require('nodemailer')
const { stdout, stderr } = require('process');


 const transporter = nodemailer.createTransport(sendgridTransport({
     auth:{
         api_key:'' //Place SendGrid API key here
     }
 }))
 // invoke CLI and get parameter for repository needed
prompt.start()

// get repository from github
 prompt.get(['repository','cloneRepository','email'], function (err, result) {
    if (err) { console.log(err); }
    console.log('Command-line input received:');
   // console.log('  Git User: ' + result.gitUser);
    console.log('  RepositoryURL: ' + result.repository);    
    console.log('  Location: ' + result.cloneRepository);    
    console.log('What email would you like to send to?');
    console.log('  Email: ' + result.email);

     function getRepo(){
         console.log(`Downloading the repository: ${result.repository}...`)
     download(`direct:${result.repository}`, `${result.cloneRepository}`, { clone: true },function (err) {
        return (err ? 'Error' : 'Success')
      })
      
   }

  function clocProcessor(){
      console.log(`Processing the repository: ${result.repository} through cloc...`)
    cp.exec(`cloc --json ${result.cloneRepository}`,(err,stdout,stderr)=>{
        console.log(stdout)
        console.log(stderr)
    //   const output = (stdout.toString())
      
    console.log(`Sending the cloc report email to: ${result.email}`)
    transporter.sendMail({
        to:`${result.email}`,
        from:'garciaelco18@gmail.com',
        subject:`cloc report for repository ${result.repository}`,
        html:`${stdout}`})

    })
} 

getRepo()
setTimeout(function(){clocProcessor()},10000)
})
