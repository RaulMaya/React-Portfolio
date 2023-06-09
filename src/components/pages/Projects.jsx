import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Projects(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(props.developer.length)

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (currentIndex === 0) {
      setCurrentIndex(props.developer.length - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < props.developer.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0)
    }
  };
  return (
    <div id="work" className="container-fluid bg-two ps-5 pt-5 pb-5">
      <p className="text-light topicStyles ps-5">Projects</p>
      <div className="d-flex justify-content-between ps-5">
        <div className="col-7">
          <h1 className="text-light mb-4 pb-3">Some of my projects for you to see</h1>
          <button
            id="backBtn"
            className="btn btn-light me-2"
            onClick={handlePreviousClick}
            type="button"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className="text-light ms-2 me-2">{currentIndex + 1}/{props.developer.length}</span>
          <button
            id="nextBtn"
            className="btn btn-light ms-2"
            onClick={handleNextClick}
            type="button"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <div>
            <h3 className="text-primary mt-5 mb-3">{props.developer[currentIndex].title}</h3>
            <p id="projectDescription" className="mt-2 mb-3 pe-5 text-light 
            text-wrap">{props.developer[currentIndex].description}</p>
            <a href={props.developer[currentIndex].url}><button className="btn btn-primary btn-md mt-4 mb-2" type="button">
              View Project
            </button></a>
          </div>
        </div>
        <div className="col-5">
          <img
            src={props.developer[currentIndex].image}
            className="device"
            width="400"
            height="450"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
