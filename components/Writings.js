import React, {Component} from 'react'
import s from './App.css'
import CenterItem from './CenterItem'
import ImgAndInfo from './ImgAndInfo'



class Writings extends Component{

	render(){
		return(
				<div className={s.subPage}>
					<CenterItem>
						<h1>Writings</h1>
					</CenterItem>
					<ImgAndInfo
							imgUrl={require('../dontComeBack.jpg')}
							title="Don't Come Back"
							info="Don’t Come Back intermixes translations of Spanish adages and adaptations of major Colombian myths with personal essays about growing up amidst violence, magic, and an unyielding Andean sun. Home is place and time and people and language and history, and none of these are ever set in stone. Attempting to reconcile the irreconcilable and translate the untranslatable—to move smoothly and cohesively between culture, language, and place—Ferreira Cabeza-Vanegas is torn between spaces, between the aunt who begs her to return to Colombia and

										the mother who tells her, “There’s nothing here for you, Lina. Don’t come back.” Don’t Come Back is an exploration of home and identity that constantly asks, “If you really could go back, would you?"
							links={<a>this is a link</a>}
							infoFirstFlag={true}
					/>
					this is the about stuff
				</div>
		)
	}
}

export default Writings
