import React, { Component } from 'react';
import './styles/contact.scss';
import Linkedin from './linkedin';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
class Contact extends Component {
    

    render(){
        return(
            <div className="contact">
                <fieldset className="contact__fieldset">
                    <legend className="contact__title">Contactez-moi</legend>
                <form className="contact__form">
                    <label className="contact__labelForm" for="nom">nom*</label>
                    <input className="contact__inputForm" type="text"></input>
                    <label className="contact__labelForm" for="société">société</label>
                    <input className="contact__inputForm" type="text"></input>
                    <label className="contact__labelForm" for="téléphone">téléphone</label>
                    <input className="contact__inputForm" type="number"></input>
                    <label className="contact__labelForm" for="email">email*</label>
                    <input className="contact__inputForm" type="email"></input>
                    <label className="contact__labelForm" for="message">message*</label>
                    <input className="contact__inputForm" type="text"></input>
                    <button className="contact__submitForm" type="submit">Envoyer</button>
                </form>
                </fieldset>
            </div>
        )
    }
}

export default Contact