import React, { useState } from "react";
import "../styles/Projects.css";
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
    <div className="container">
      <p className="topicStyles">Projects</p>
      <div className="d-flex justify-content-between">
        <div className="col-7">
          <h1 className="text-primary">Some of my projects for you to see</h1>
          <button
            id="backBtn"
            className="btn btn-primary me-2"
            onClick={handlePreviousClick}
            type="button"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span>0{currentIndex + 1}/0{props.developer.length}</span>
          <button
            id="nextBtn"
            className="btn btn-primary ms-2"
            onClick={handleNextClick}
            type="button"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <div>
            <h3 className="text-primary">{props.developer[currentIndex].title}</h3>
            <p className="text-primary">{props.developer[currentIndex].description}</p>
            <p className="text-primary">{props.developer[currentIndex].url}</p>
            <button className="btn btn-primary btn-lg" type="button">
              View Project
            </button>
          </div>
        </div>
        <div className="col-5">
          <img
            src={props.developer[currentIndex].image}
            className="device"
            width="300"
            height="300"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
