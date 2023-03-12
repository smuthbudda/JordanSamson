import React from "react";
import "./Projects.css"
import { Link } from "react-router-dom";
import image from './codeimage.png'


function Projects() {
  return (
    <div className="about-container">
      <h1 className="about-title">Projects</h1>
      <h2 className="">
        <Link to="/projects/pointscalculator" className="nav-link">
          World Athletics Points Calculator
        </Link>
      </h2>
      <div>
        <ul>
          <li>Made a converter that returns a json file with all of the score for each events/time/distance.</li>
          <li>The data for that converter is stored in a pdf.</li>
          <li>
            <b>
              <a target="_blank" href="https://github.com/smuthbudda/WorldAthleticsTableConverter" >
                The link to this code lives here.
              </a>
            </b>
          </li>
          <li>The code takes about 6 seconds to parse through ~600 pages.</li>
          <li>The output file is about ~180,000 json objects</li>
        </ul>
      <image src={image} className="points-image" alt=""/>
      </div>
    </div>
  );

}

export default Projects;