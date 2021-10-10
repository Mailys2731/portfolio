import React, { useState } from "react";
import './styles/contact.scss';
import ContactForm from '../Components/ContactForm';
import Linkedin from '../Components/linkedin';

const Contact = () => {

        return(
            <div className="contact">
                <div className="contact__title">
                    <p>Mon profil vous intéresse ? Un projet, une opportunité à me présenter ?</p>
                </div>
                <div className="contact__box">
                <ContactForm className="contact__form"/>
                <div>
                
                </div>
                </div>
            </div>
        )
}

export default Contact