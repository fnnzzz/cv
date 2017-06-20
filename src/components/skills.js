import React, { Component } from 'react'

export default class Skills extends Component {
	render() {

		const d = this.props.data

		return (
			<article className="article-block">
				<h4 className="article-title">{d.blockname}:</h4>

				<ul className="article-list">
					{d.list.map(skill => {

						return <li key={skill.name} className={ skill.descr ? '-detailed' : '' }>
							{skill.name}
							{ skill.descr ? <p dangerouslySetInnerHTML={{__html: skill.descr}}></p> : '' }
						</li>

					})}
				</ul>
			</article> 
		)
	}
}