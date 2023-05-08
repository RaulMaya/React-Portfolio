import React from 'react';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


function About() {
  return (
    <div className="container">
        <p className="topicStyles">About Me</p>
        <div className="d-flex justify-content-between">
            <div className="col-7">
                <h1 className="text-primary">Get to know me</h1>
                <button className="btn btn-primary me-2" type="button">Get in touch</button>
                <a href="./RaulMayaSalazar_Resume.pdf" download="raulmayasresume"><button className="btn btn-primary ms-2" type="button">Download Resume</button></a>
            </div>
            <div className="col-5">
                <img src="./Coding.png" className="device" width="300" height="300"></img>
            </div>
        </div>
    </div>
  );
}

export default About;