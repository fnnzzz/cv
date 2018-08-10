import React, { Component } from 'react'
import TopBio from './top-bio'
import GeneralInfo from './general-info'
import Skills from './skills'
import WorkExperience from './work-experience'
import cvData from '../cv-data.json'

export default class CvContainer extends Component {
    constructor(props) {
        super(props)

        this.fadeOut = (el) => {
            el.style.opacity = 1;

            (function fade() {
                if ((el.style.opacity -= 0.04) < 0) {
                    el.style.display = 'none'
                } else {
                    requestAnimationFrame(fade)
                }
            })()
        }
    }

    componentDidMount() {
        this.fadeOut(document.querySelector('#loader'))
    }

    render() {
        return <section className="main-container">
            <TopBio data={cvData.topbio} />
            <GeneralInfo data={cvData["general-info"]} />
            <Skills data={cvData.skills} />
            <WorkExperience data={cvData["work-experience"]} />
        </section>
    }
}
