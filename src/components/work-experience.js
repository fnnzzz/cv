import React, { Component } from 'react'


const EndOrNowComponent = (props) => {
    return !props.date ? <span className="-now" title="up until today">now</span> : <span>{props.date}</span>
}


export default class WorkExperience extends Component {
    render() {
        const d = this.props.data

        return (
            <article className="article-block">
                <h4 className="article-title">{d.blockname}:</h4>

                <ul className="article-list">
                    {d.list.map(w => <li key={w.name} className={w.descr ? '-detailed' : ''}>
                        {w.name} ({w.start} — <EndOrNowComponent date={w.end} />)
                        <p dangerouslySetInnerHTML={{__html: w.descr}} />
                    </li>)}
                </ul>
            </article>
        )
    }
}
