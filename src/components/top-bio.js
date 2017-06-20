import React, { Component } from 'react'

export default class TopBio extends Component {
	render() {
		
		const d = this.props.data

		return (
			<article className="top-bio__wrap">
				<img className="top-bio__photo" src={d.pic} alt={d.fullname} title="Hello! It's me" />
				
				<div className="top-bio__rightside">
					<h2 className="top-bio__fullname">{d.fullname}</h2>
					<p className="top-bio__title">{d.title}</p>

					<ul className="top-bio__links">
						{d.links.map(l => {
							return <li key={l.href}>
								{l.name}: <a href={l.href} target={l.targetBlank ? '_blank' : '_self' }>{l.val}</a>
							</li>
						})}
					</ul>
				</div>

			</article>
		)
	}
}