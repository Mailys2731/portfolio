import React, { Component } from 'react';
import Header from '../Components/Header';
import AboutMe from '../Components/AboutMe';
import StackTechnique from '../Components/StackTechnique';
import Parcours from '../Components/Parcours';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import '../Components/styles/homePage.scss';

class HomePage extends Component {

    render() {
        return (
            <div className="homePage">
                <div className="homePage__loaderBox">
                <div class="homePage__lds-circle"><div></div></div>
                </div>
                <Header/>
                <AboutMe/>
                <Parcours/>
                <StackTechnique/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage