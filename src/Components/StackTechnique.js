import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDatabase, faPencilRuler } from '@fortawesome/free-solid-svg-icons';

import './styles/stackTechnique.scss';

class StackTechnique extends Component {

    render() {
        return (
            <div className="stackTechnique">
                <div className="stackTechnique__box">

                    <FontAwesomeIcon className="stackTechnique__icon" icon={faPencilRuler} />
                    <fieldset className="stackTechnique__fieldset">
                        <legend className="stackTechnique__legend">Front-end</legend>
                    </fieldset>
                </div>
                <div className="stackTechnique__box">
                    <FontAwesomeIcon className="stackTechnique__icon" icon={faServer} />
                    <fieldset className="stackTechnique__fieldset">
                        <legend className="stackTechnique__legend">Back-end</legend>
                    </fieldset>
                </div>
                <div className="stackTechnique__box">
                    <FontAwesomeIcon className="stackTechnique__icon" icon={faDatabase} />
                    <fieldset className="stackTechnique__fieldset">
                        <legend className="stackTechnique__legend">Databases</legend>
                    </fieldset>
                </div>

            </div >
        )
    }
}

export default StackTechnique