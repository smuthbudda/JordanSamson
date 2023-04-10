import React from "react";
import "./About.css"
import Glitch from "../Components/GlitchedText/GlitchedText";
import Card from "../Components/Card"

function About() {
  return (
    <div className="about-container">
        <div className="about__description">
          <Glitch text="About" id="About"
            style={{ "font-size": "2.5rem", "color": "black", "padding-bottom":"1rem"}} className="one" />
          <p className="about-paragraph">
            I'm Jordan! Im a software developer and wanna be sprinter who is currently living in Melbourne.
            <br />
            <br />
            I attended the University of Calgary and studied <b>Economics</b> with a minor in computer science and graduated
            May 2021. Im currently working as a developer at a SafeCode.
            <br />
            <br />
            I've been running for a long time and. I ran athletics for U of C
            and competed there while completing my degree. Since graduation, I've continuted to run track in Australia and
            am hoping to set some new personal bests.
            <br />
            Here are my current personal bests:
            <ul>
              <li>60m: 7.09</li>
              <li>100m: 11.06 (-2.5)</li>
              <li>200m: 21.93 (-1.2)</li>
              <li>300m: 35.27 (indoor flat track) </li>
              <li>200m: 49.70</li>
            </ul>
          </p>
        </div>
    </div>
  );

}

export default About;