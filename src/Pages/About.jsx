import React from "react";
import "./About.css"


function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <p className="about-paragraph">
        I'm Jordan! Im a software developer and wanna be sprinter who is currently living in Melbourne, Vic.
        <br/>
        <br/>
        I attended the University of Calgary and studied <b>Economics</b> with a minor in computer science and graduated
        May 2021. Im currently working as a junior developer at a SafeCode where I do both front end and backend work for 
        our internal systems. 
        <br/>
        <br/>
        My hobbies include running... a lot of running and hanginng out with my girlfriend. I ran athletics for U of C
        and competed there while completing my degree. Since graduation, I've continuted to run track in Australia and 
        am hoping to set some new personal bests.
        <br/>
        PB's
        <ul>
          <li>60m: 7.09</li>
          <li>100m: 11.06 (-2.5)</li>
          <li>200m: 21.93 (-1.2)</li>
          <li>300m: 35.27 (indoor flat track) </li>
          <li>200m: 49.70</li>
        </ul>
      </p>
    </div>



  );

}

export default About;