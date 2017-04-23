import React, {Component} from 'react'
import s from './ImgAndInfo.css'

class ImgAndInfo extends Component {

	componentWillMount() {
	}

	renderInfoContainer(infoFirstFlag) {
		let {title, info, links} = this.props
		// let infoStyle = infoFirstFlag ? {paddingLeft: '5px'} : {paddingRight: '5px'}
		let infoClassName = infoFirstFlag ? s.rightContentContainer : s.leftContentContainer
		return (
				<div className={s.infoContainer}>
					<div className={infoClassName}>
						<div className={s.title}>{title}</div>
						<div className={s.info}>{info}</div>
						<div className={s.links}>{links}</div>
					</div>
				</div>
		)
	}

	render() {
		let {imgUrl, infoFirstFlag} = this.props

		let ImgClassName = infoFirstFlag ? s.leftContentContainer : s.rightContentContainer
		return (
				<div className={s.imgAndInfoContainer}>
					<div className={s.imgAndInfoContent}>
						{infoFirstFlag ? this.renderInfoContainer(infoFirstFlag) : null}
						<div className={s.imgContainer}>
							<div className = {ImgClassName}>
							<img src={imgUrl}/>
							</div>
						</div>
						{!infoFirstFlag ? this.renderInfoContainer(infoFirstFlag) : null}
					</div>
				</div>
		)
	}

}

export default ImgAndInfo
