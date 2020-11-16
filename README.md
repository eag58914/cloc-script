# cloc-script
## *Send repository cloc report to a specified email address as an attachment (.CVS)*

* * *

Cloc-Report will clone a repository, scan with cloc and send the report to a specified email address

Works with Github, Bitbucket and GitLab repositories

### Requirements
- Node v13.7.0
    - Must have latest node version installed 
    - Packages required
    	- Run "npm install download-git-repo" from the command line
    	- Run "npm install prompt" from the command line
    	- Run "npm install nodemailer" from the command line
    	- Run "npm install nodemailer-sendgrid-transport" from the command line
    - Destination email address(does not have to be a gmail account )
  - SignUp an get API key from SendGrip [link to signup](https://signup.sendgrid.com)
- Git (Mac version 2.28.0)

### Usage
- Works with bash
- Execute the script with on file "node cloc-process"

**(Prompted for values)**
```sh

Type the GitHub user name for the repository: <user name>
Type the repository name for the repository: <repository name>
Type location where you want the repository to go: <file location>
Type the destination email and press enter: <destination email address>
```



**(Output)**
```sh

Downloading the repository: <repository name>
Processing the repository: <repository name> through cloc... 
Type location where you want the repository to go: <file location>
Sending the cloc report email to: <destination email address>
```

#### File output
An email will be sent to the destination email with the subject "cloc report for repository &lt;repository name&gt;"
- The email will contain a message with your cloc report 
