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
      <h1>Projects</h1>
      <div className="">
        <Showcase left={true}
          child1={
            <image src={image} alt="image" className="images" id="salaryPackagingPage" />
          }
          child2={
            <div className="project__description left">
              <small>Recent Project</small>
              <h4>Salary Packaging Page</h4>
              <div className="project__paragraph">
                A page where salary packaging employees can view and update their salary pacakging schedules and amounts.
                <br />
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

        <Showcase left={false} child2={
          <image src={SalaryPackaging} className="images" id="reactsite" />
        }
          child1={
            <div className="project__description right">
              <small>Recent Project</small>
              <h4>React Portfolio Website</h4>
              <div className="project__paragraph paragraph-right">
                A page where salary packaging employees can view and update their salary pacakging schedules and amounts.
                <br />
                Admin fees are updated in real time and reflect the changes to the salary packaging benefits
              </div>
              <div className="project__experience-right">
                <div>React</div>
                <div>VS Code</div>
                <div>GIT</div>
                <div>Components</div>
                <div>Vercel</div>
              </div>
            </div>
          } />

        <Showcase left={true} child1={
          <image src={SalaryPackaging} className="images" id="code" />
        }
          child2={
            <div className="project__description left">
              <small>Recent Project</small>
              <h4>PDF Table Converter</h4>
              <div className="project__paragraph">
                A page where salary packaging employees can view and update their salary pacakging schedules and amounts.
                <br />
                Admin fees are updated in real time and reflect the changes to the salary packaging benefits
              </div>
              <div className="project__experience">
                <div>C#</div>
                <div>.NET</div>
              </div>
            </div>
          } />
          
      </div>
      <h1>Other Projects</h1>
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
      </div>
    </div>
  );

}

export default Projects;