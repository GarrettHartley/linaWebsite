import React, {Component} from 'react'


class Main extends Component{
	render(){
		console.log("inside of MAIN")
		return(	<div>
			{this.props.children}
		</div>
	)
	}
}

export default Main;