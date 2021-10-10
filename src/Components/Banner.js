import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';


import './styles/banner.scss'


class banner extends Component {

    render() {
        return (
            <div className="banner">
                
                <h1 className='banner__title'>Développeuse Web</h1>
                <h2 className='banner__subTitle'> ReactJS <FontAwesomeIcon className="reactIcon" icon={faReact} /> / NodeJS <FontAwesomeIcon icon={faNodeJs} /></h2>
                
            </div>
        )
    }
}

export default banner