import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


function About() {
  return (
    <div id="about" className="container-fluid bg-one ps-5 pt-5 pb-5">
      <p className="topicStyles text-light ps-5">About Me</p>
      <div className="d-flex justify-content-between ps-5">
        <div className="col-8">
          <h1 className="text-primary text-light mb-4 mt-2">Get to know me</h1>
          <p className="topicStyles text-light subtitle mt-5">Who am I</p>
          <p className='text-light pb-3 content'>Web Developer and Data Analytics Engineer with a background in Industrial Engineering and
            life-long dedication to learning. Certified by Tecnológico de Monterrey Data Analytics &
            Visualization Bootcamp, and by Tecnológico de Monterrey Web Development Bootcamp.
            Effective at combining creativity and problem solving to make sense of your information and
            build easy-to-use applications based on it. Recognized among employees for his sharp mind
            and mindfulness, no matter how complex the project</p>
          <p className="topicStyles text-light subtitle mt-5">Skills & Tools</p>
          <p className='text-light pb-3 content'>jQuery (JS), Web APIs (JS), Node.js (JS), Express.js (JS), D3.js (JS), React.js (JS),
            Days.js (JS), Django (P), Flask (P), Pandas (P), Matplotlib (P), Plotly (P), Beautiful Soup (P),
            Selenium (P), Requests (P), Scikit-Learn (P), Postgres (S), MongoDB(M), Google Cloud
            Platform (GCP)</p>
          <button className="btn btn-primary me-2" type="button">Get in touch</button>
          <a href="./RaulMayaSalazar_Resume.pdf" download="raulmayasresume">
            <button className="btn btn-primary ms-2" type="button">Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;