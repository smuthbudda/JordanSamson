import "./Card.css"
import React from "react";


function Card(props) {
    return (
        <div className="card-container">
            {props.children}
        </div>
    );
}

export default Card;