import React, {Component} from 'react'
import s from './App.css'
import CenterItem from './CenterItem'
import ImgAndInfo from './ImgAndInfo'



class SomethingElse extends Component{

	render(){
		return(
				<div className={s.subPage}>
					<CenterItem>
						<h1>Something Else</h1>
					</CenterItem>
					<ImgAndInfo
							imgUrl={require('../linaFerreira.jpg')}
							title="Title"
							info="Lina Ferreira was born and raised (mostly) in Bogota, Colombia and has since then been tumbleweeding aimlessly through the world. She is the author of Drown Sever Sing, and her ode to cannibalism can be found in the collection titled, After Montaigne: Contemporary Essayists Cover the Essays. She is a graduate of The University of Iowa’s Creative Nonfiction and Literary Translation programs, and her work has been featured in Arts and Letters, The Chicago Review, and Fourth Genre, among others.  Her new book, Don't Come Back,  is published by Mad River Books, an imprint of The Ohio State University Press (January 2017). Ferreira is a recipient of the 2016 Rona Jaffe Foundation Writer's Award."
							links="links go here"
							infoFirstFlag={false}
					/>
					some more content?
				</div>
		)
	}
}

export default SomethingElse
