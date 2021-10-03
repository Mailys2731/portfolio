import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import Pdf from '../medias/CV.pdf';

import './styles/aboutMe.scss'


class AboutMe extends Component {

    render() {
        return(
            <div className="aboutMe">
                <div className='aboutMe__avatar'>
                </div>
                <h1 className='aboutMe__title'>Développeuse Web</h1>
                <h2 className='aboutMe__subTitle'> ReactJS <FontAwesomeIcon icon={faReact} /> / NodeJS <FontAwesomeIcon icon={faNodeJs} /></h2>
                <a className="aboutMe__uploadCvLink" href={Pdf} target="_blank">Télécharger CV</a>
            </div>
        )
    }
}

export default AboutMe