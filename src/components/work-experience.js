import React, { Component } from 'react'


const EndOrNowComponent = (props) => {
	if(!props.date)
		return <span className="-now">now</span>
	else
		return <span>{props.date}</span>
}


export default class WorkExperience extends Component {
	render() {
		const d = this.props.data

		return (
			<article className="article-block">
				<h4 className="article-title">{d.blockname}:</h4>

				<ul className="article-list">
					{d.list.map(w => {
						return (
							<li key={w.name}>
								{w.name} ({w.start} — <EndOrNowComponent date={w.end} />)
							</li>
						)
					})}
				</ul>
			</article> 
		)
	}
}