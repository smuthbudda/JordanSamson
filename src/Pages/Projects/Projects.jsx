import React from "react";
import "./Projects.css"
import { Link } from "react-router-dom";
import image from './codeimage.png'
import * as Unicons from '@iconscout/react-unicons';
import Card from "../../Components/Card"
import Showcase from "../../Components/Showcase/Showcase";
import SalaryPackaging from "../Images/Page.png"
import Glitch from "../../Components/GlitchedText/GlitchedText";

function Projects() {
  return (
    <div style={{ "display":"flex", "justifyContent": "center"}}>
      <div className="yeah-container">
        <div style={{ "width": "100%", "textAlign": "start" }}>
          <Glitch text="Projects" id="About"
            style={{ "font-size": "2.5rem", "color": "black", "padding-bottom": "3rem" }} className="one" />
        </div>
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
                  <br />
                  <br />
                  <br />
                  
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
                  A site I made in react for some practice.
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
                  Converts the world athletics scoring table pdf to a more usable JSON array.
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

          {Cards.map((item, key) =>
            <Card>
              <div className="card__header">
                <Unicons.UilFolder className="icon" size="2rem" color="#FF3B3F" />
                <Link to="/projects/pointscalculator" className="nav-link">
                  <Unicons.UilLink className="icon" size="2rem" color="white" />
                </Link>
              </div>
              <div className="card__body">
                <div>{item.Title}</div>
                <p>{item.Body}</p>
                <div className="card__tech">
                  {item.Technologies.map((tech, key) =>
                    <small>{tech.Name}</small>
                  )}
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );

}


const Cards = [
  { Title: "World athletics points calculator", Body: "Can calcultate athletics scores in all recongized world athletics events ", Technologies: [{ Name: "C#" }, { Name: ".Net" }] },
  { Title: "1", Body: "I need more projects", Technologies: [{ Name: "C#" }, { Name: ".Net" }] },
  { Title: "2", Body: "I need more projects", Technologies: [{ Name: "C#" }, { Name: ".Net" }] },
  { Title: "3", Body: "BI need more projects", Technologies: [{ Name: "C#" }, { Name: ".Net" }] },
]

export default Projects;