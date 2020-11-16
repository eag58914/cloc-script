import React from 'react';

import { Router, Link } from 'react-router-dom';

const Navigation: React.ReactType = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to={'/signin'}>Sign In</Link>
				</li>
				<li>
					<Link to={'/'}>Landing</Link>
				</li>
				<li>
					<Link to={'/home'}>Home</Link>
				</li>
				<li>
					<Link to={'/account'}>Account</Link>
				</li>
				<li>
					<Link to={'/admin'}>Admin</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
