import React, { Component } from 'react'


export default class GeneralInfo extends Component {
    render() {
        const d = this.props.data

        return <article className="article-block">
            <h4 className="article-title">{d.blockname}:</h4>

            <p className="article-descr">
                <span>{d["date-of-birth"].key}:</span> {d["date-of-birth"].val}
            </p>
            <p className="article-descr">
                <span>{d.education.key}:</span> {d.education.val}
            </p>
        </article>
    }
}
