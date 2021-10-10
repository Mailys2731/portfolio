import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDatabase, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import Iceberg from '../images/iceberg.png';
import Plante from '../images/plante.png';
import WomanStay from '../images/womanStay.png'

import './styles/stackTechnique.scss';

class StackTechnique extends Component {

    render() {
        return (
            <div className="stackTechnique">
                <div className="stackTechnique__skills">
                <div className="stackTechnique__skillsBox stackTechnique__hardSkillsBox">
                    <div>
                    <img src={WomanStay} height="200px"/>
                    <h3 className="stackTechnique__neonText">Hard-skills</h3>
                    <p>Conception et intégration UI</p>
                    <p>Design responsif</p>
                    <p>Optimisation SEO</p>
                    <p>Sécurisation des données (OWASP)</p>
                    <p>Création et implémentation restAPI</p>
                    
                    </div>
                </div>
                <div className="stackTechnique__skillsBox stackTechnique__softSkillsBox">
                    <div>
                    <img src={Plante} alt="Plante" height="200px"/>
                    <h3>Soft-skills</h3>
                    <p>Engagement</p>
                    <p>Méthodologie</p>
                    <p>Créativité</p>
                    <p>Communication bienveillante</p>
                    <p>Capacité à actualiser ses connaissances</p>
                    <p>Fiabilité et discrétion</p>
                    <p>Pensée critique</p>
                    </div>
                </div>
                </div>
                <div className="stackTechnique__stackBox">
                    <div className="stackTechnique__boxImg">
                        <img src={Iceberg} alt="iceberg" height="500px" />
                    </div>
                    <div className="stackTechnique__stackList">
                        <h3>Stack techchnique</h3>
                        <div className="stackTechnique__stackBorderLeft">
                        <h4>Front-end</h4>
                        <p>ReactJS</p>
                        <p>Axios</p>
                        <p>Material UI</p>
                        <p>Sass/scss</p>
                        <p>Bootstrap</p>
                        <p>Méthodologie BEM</p>
                        <h4>Back-end</h4>
                        <p>NodeJS</p>
                        <p>Express</p>
                        <p>Bcrypt</p>
                        <p>Multer</p>
                        <h4>Bases de données</h4>
                        <p>MongoDB</p>
                        <p>Mongoose</p>
                        <p>MongoAtlas</p>
                        <p>MySql</p>
                        <p>Sequelize</p>
                        <p>PhpMyAdmin</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default StackTechnique