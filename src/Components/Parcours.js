import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUpload, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import CircleGolden from '../images/circle.png'

import './styles/parcours.scss'

class Parcours extends Component {

    render() {
        return (
            <div className="desc">

                <div className="desc__boxBjr">
                    <div className="desc__borderBjr">
                        <p className="desc__bjr">Bonjour</p>
                        <p className="desc__bienvenue">et bienvenue !</p>
                    </div>
                </div>
                <div className="desc__boxText">

                    <div className="desc__boxOutQuote">
                        <p className="desc__quoteLeft"><FontAwesomeIcon className="desc__quoteLeftIcon" icon={faQuoteLeft} /></p>
                        <p className="desc__myName">
                            Je m'appelle <span>Maïlys Condamy</span>, Je suis développeuse <span>Javascript</span>.</p>
                        <p className="desc__text">Je place le référencement et la performance au centre de ma réflexion et mon appétence pour le design m’attache à garantir une expérience utilisateur optimale.
                        </p>
                        <p className="desc__quoteRight" ><FontAwesomeIcon icon={faQuoteRight} /></p>
                    </div>


                </div>


            </div>
        )
    }
}

export default Parcours