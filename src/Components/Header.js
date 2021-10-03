import React, { Component } from 'react';
import SimpleMenu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouse } from '@fortawesome/free-solid-svg-icons';
import './styles/header.scss'
class Header extends Component {


    render() {
        return (
            <div className ="header">
                <div className ="header__myName">Maïlys développement</div>
                <FontAwesomeIcon className="header__mouseIcon" icon={ faMouse }/>
            </div>
        )
    }

}

export default Header