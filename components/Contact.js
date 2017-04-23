import React, {Component} from 'react'
import s from './App.css'
import ImgAndInfo from './ImgAndInfo'
import CenterItem from './CenterItem'

class Contact extends Component{


	render(){
		console.log("Contact Render")

		return(
					<div className={s.subPage}>
						<CenterItem>
							<h1>Contact</h1>
							<div>email: IHateYou@us.uck.com</div>
						</CenterItem>
					</div>
		)
}
}

export default Contact;
