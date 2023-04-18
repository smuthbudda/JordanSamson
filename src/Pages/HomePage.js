import React from "react";
import Glitch from "../Components/GlitchedText/GlitchedText";
import "./HomePage.css";
import Notes from "../Components/Notes/Notes"


function HomePage() {
    return (
        <div className="home">
            <div className="home__container">
                <p>Hi, my name is</p>
                <Glitch text="Jordan Samson" id="Jordan Samson"
                    style={{ "font-size": "3.5rem", "color": "black", "text-align" : "end"}} className="one" />
                <h4 >
                    I'm a Web Developer based in
                    <div className="home__subtitle"> Melbourne, VIC, Australia.</div>
                </h4>
            </div>
            <div className="home__description">
                <div className="home__thing">
                    <Notes/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;