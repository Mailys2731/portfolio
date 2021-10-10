import React, { Component } from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import StackTechnique from '../Components/StackTechnique';
import Parcours from '../Components/Parcours';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Linkedin from '../Components/linkedin';
import '../Components/styles/homePage.scss';

class HomePage extends Component {
/* <div className="homePage__loaderBox">
                    <div className="homePage__lds-circle"><div></div>
                    </div>
                </div>*/
    render() {
        return (
            <div className="homePage">
                <Header />
                <Banner />
                <Contact />
            </div>
        )
    }
}

export default HomePage