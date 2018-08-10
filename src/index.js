import React from 'react'
import { render } from 'react-dom'
import CvContainer from './components/cv-container'
import { AppContainer } from 'react-hot-loader'

// import styles
import './assets/styles/styles.scss'

// import pics
import './assets/images/bg.jpg'
import './assets/images/photo.png'

const renderApp = Component => {
    render(
        <AppContainer>
            <CvContainer />
        </AppContainer>,
        document.querySelector('#mount_place')
    )
}

renderApp(CvContainer)

if (module.hot) {
    module.hot.accept('./components/cv-container', () => { renderApp(CvContainer) })
}
