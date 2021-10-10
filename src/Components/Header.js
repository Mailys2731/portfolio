import React, { Component } from 'react';
import SimpleMenu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouse, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles/header.scss'
class Header extends Component {



    render() {
        return (
            <header className="header">
                <nav className="header__nav">
                    <ul className="header__listBox">
                        <div className="header__accueil">
                            <li ><a href="#">ACCUEIL</a></li>
                        </div>

                        <div className="header__listOther">
                            <span className="header__btnMenu">
                                <FontAwesomeIcon className="header__btnMenuBars" icon={faBars} />
                                <div className="header__listLi">
                                    <li className="menuItem"><a href="#">À PROPOS</a></li>
                                    <li className="menuItem"><a href="#">COMPÉTENCES</a></li>
                                    <li className="menuItem"><a href="#">PORTFOLIO</a></li>
                                    <li className="menuItem"><a href="#">CONTACT</a></li>
                                </div>
                            </span>
                        </div>
                    </ul>
                </nav>
            </header>
        )
    }

}

export default Header