import React, {Component} from 'react'
import s from './CenterItem.css'

class CenterItem extends Component {

	render(){

		let children = this.props.children

		return (<div className={s.centerItem}>
					{children}
		</div>
		);
	}

}

export default CenterItem