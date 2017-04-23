import React, {Component} from 'react'
import s from './App.css'
import {Link} from 'react-router';

class MultiPageApp extends Component {

	render(){
		console.log("check props")
		return (
				<div>
					<nav className={s.nav}>
						<ul>
							<li><Link to="/multiPage/about">About</Link></li>
							<li><Link to="/multiPage/writings">Writings</Link></li>
							<li><Link to="/multiPage/something-else">Something Else</Link></li>
							<li><Link to="/multiPage/contact">Contact</Link></li>
						</ul>
					</nav>
					{this.props.children}


				</div>
		)
	}

}

export default MultiPageApp