import React from 'react';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


function Connect() {
  return (
    <div className="container">
        <p className="topicStyles">Connect</p>
        <div className="d-flex justify-content-between">
            <div className="col-7">
                <h1 className="text-primary">Interested on reaching me out?</h1>
                <button className="btn btn-primary" type="button"><FontAwesomeIcon icon={faArrowLeft} /></button>
                <button className="btn btn-primary" type="button"><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
            <div className="col-5">
                <img src="./Coding.png" className="device" width="300" height="300"></img>
            </div>
        </div>
    </div>
  );
}

export default Connect;