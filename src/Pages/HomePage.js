import React, { Component } from 'react';
import Header from '../Components/Header';
import AboutMe from '../Components/AboutMe';
import StackTechnique from '../Components/StackTechnique';
import Parcours from '../Components/Parcours';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

class HomePage extends Component {

    render() {
        return (
            <div>
                <Header/>
                <AboutMe/>
                <StackTechnique/>
                <Parcours/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage