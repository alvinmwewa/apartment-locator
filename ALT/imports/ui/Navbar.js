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
			<nav>
				<div class="nav-wrapper">
				<ul id="slide-out" class="sidenav">
    			<li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    			<li><a href="#!">Second Link</a></li>
    			<li><div class="divider"></div></li>
    			<li><a class="subheader">Subheader</a></li>
    			<li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  			</ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>

					<a href="#" class="brand-logo">Logo</a>
					<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><a href='/'>Home</a></li>
					<li><a href='/about'>About</a></li>
					<li><a href='/contact'>Contact</a></li>
					<li><a href='/login'>Log In</a></li>
					<li><a href='/signup'>Sign Up</a></li>
					</ul>
				</div>
			</nav>

		)
	}
}

export default Navbar
