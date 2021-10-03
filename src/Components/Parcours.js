import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import './styles/parcours.scss'

class Parcours extends Component {

    render() {
        return (
            <div className="parcours">
                <h2 className="parcours__title">À propos de moi</h2>
                <div className="parcours__pointDiv">
                    <FontAwesomeIcon className="parcours__icon" icon={faGraduationCap} />
                    <p className="parcours__textDiv">

                    </p>
                </div>
                <div className="parcours__pointDiv">
                    <FontAwesomeIcon className="parcours__icon" icon={faHeart} />
                    <p className="parcours__textDiv">

                    </p>
                </div>
                <div className="parcours__pointDiv">
                    <FontAwesomeIcon className="parcours__icon" icon={faBriefcase} />
                    <p className="parcours__textDiv">

                    </p>
                </div>
            </div>
        )
    }
}

export default Parcours