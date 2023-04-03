import React from "react";
import "./Works.css"
import Glitch from "../..//Components/GlitchedText/GlitchedText";
import SPP from './Page.png';
import Card from "../../Components/Card"

function Works() {
    return (
        <div className="works-container">
            <Glitch text="Works" id="Jordan Samson"
                style={{ "font-size": "2.5rem", "color": "black" }} classNase="one" />

            <Card left={
                <div>
                    <h1>Salary Packaging Page</h1>
                    <p>A web page for salary packaging customers to update and visualize their salary packaging.
                        <br/>
                       Packaging, novated leases are all displayed here and are fully able to be customized.  
                    </p>
                </div>
            } right={
                <img src={SPP} alt="SPP" id="salaryPackagingPage" />
            } />

        </div>
    );

}

export default Works;