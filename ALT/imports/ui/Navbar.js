import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signup from './accounts/Signup.js';
import Login from './accounts/Login.js';


class Navbar extends Component{

	render(){
		return(
			<div>
				<div>
					<a href='/'>Home</a>
					<a href='/about'>About</a>
					<a href='/contact'>Contact</a>
					<a href='/login'>Log In</a>
					<a href='/signup'>Sign Up</a>
				</div>
			</div>

		)
	}
}

export default Navbar
