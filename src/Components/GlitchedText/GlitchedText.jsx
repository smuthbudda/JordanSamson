
import React, { useState } from "react";
import "./GlitchedText.css";


function GlitchedText(props) {
    return (
        <div className="glitch" id={props.id} style={props.style}>
            {props.text}
        </div>
    )
}

const parentDOM = document.getElementById("");

export default GlitchedText;