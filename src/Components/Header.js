import React, { Component } from 'react';
import SimpleMenu from './Menu';
import './styles/header.scss'
class Header extends Component {


    render() {
        return (
            <div className ="header">
                <div className ="header__myName"><p>Maïlys Condamy</p></div>
                <div className="header__menu"><SimpleMenu/></div>
            </div>
        )
    }

}

export default Header