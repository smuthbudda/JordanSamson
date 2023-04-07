import React from "react";
import "./Projects.css"
import { Link } from "react-router-dom";
import image from './codeimage.png'
import * as Unicons from '@iconscout/react-unicons';
import Card from "../../Components/Card"
import Showcase from "../../Components/Showcase/Showcase";
import SalaryPackaging from "../Images/Page.png"


function Projects() {
  return (
    <div className="yeah-container">
        <image src={SalaryPackaging} />
      <div>
        <Showcase child1={
          <image src={SalaryPackaging} alt="SalaryPackaging" className="salaryPackaging" />
        }
          child2={
            <div className="project__description ">
              <small>Recent Projects</small>
              <h4>Salary Packaging Page</h4>
              <div className="project__paragraph">
                A page where salary packaging employees can view and update their salary pacakging schedules and amounts.
                <br/>
                Admin fees are updated in real time and reflect the changes to the salary packaging benefits
              </div>
              <div className="project__experience">
                <div>Blazor</div>
                <div>Components</div>
                <div>REST API</div>
                <div>C#</div>
                <div>.NET</div>
              </div>
            </div>
          } />
          <Showcase child1={
          <image src={SalaryPackaging} alt="SalaryPackaging" className="salaryPackaging" />
        }
          child2={
            <div className="project__description">
              <small>Recent Projects</small>
              <h4>Salary Packaging Page</h4>
              <div className="project__paragraph">
                A page where salary packaging employees can view and update their salary pacakging schedules and amounts.
                <br/>
                Admin fees are updated in real time and reflect the changes to the salary packaging benefits
              </div>
              <div className="project__experience">
                <div>Blazor</div>
                <div>Components</div>
                <div>REST API</div>
                <div>C#</div>
                <div>.NET</div>
              </div>
            </div>
          } />

      </div>
      <div className="projects__container">
        <Card>
          <div className="card__header">
            <Unicons.UilFolder className="icon" size="2rem" color="#FF3B3F" />
            <Link to="/projects/pointscalculator" className="nav-link">
              <Unicons.UilLink className="icon" size="2rem" color="white" />
            </Link>
          </div>
          <div className="card__body">
            <div>World Athletics Points Table Converter</div>
            <p>Built a converter that takes a PDF file of the world athletics table and converts them to the </p>
            <div className="card__tech">
              <small>C#</small>
              <small>.NET</small>
            </div>
          </div>
        </Card>
        <Card>
          <div className="card__header">
            <Unicons.UilFolder className="icon" size="2rem" color="#FF3B3F" />
            <Unicons.UilLink className="icon" size="2rem" color="white" />
          </div>
          <div className="card__body">
            <div>React Portfolio Website</div>
            <p>Built a converter that takes a PDF file of the world athletics table and converts them to the </p>
            <div className="card__tech">
              <small>C#</small>
              <small>.NET</small>
            </div>
          </div>
        </Card>
        <Card>
          <div className="card__header">
            <Unicons.UilFolder className="icon" size="2rem" color="#FF3B3F" />
            <Unicons.UilLink className="icon" size="2rem" color="white" />
          </div>
          <div className="card__body">
            <div>World Athletics Points Table Converter</div>
            <p>Built a converter that takes a PDF file of the world athletics table and converts them to the </p>
            <div className="card__tech">
              <small>C#</small>
              <small>.NET</small>
            </div>
          </div>
        </Card>
        {/* <h1 className="about-title">Projects</h1>
      <h2 className="">
      
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
    </div> */}
      </div>
    </div>
  );

}

export default Projects;