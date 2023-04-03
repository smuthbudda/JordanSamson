import React from "react";
import Glitch from "../Components/GlitchedText/GlitchedText";
import "./HomePage.css";



function HomePage() {
    return (
        <div className="home__container">
            <Glitch text="Jordan Samson" id="Jordan Samson"
                style={{ "font-size": "3.5rem", "color": "black" }} className="one" />
        </div>
    )
}

export default HomePage;