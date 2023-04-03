import "./Card.css"
import React from "react";


function Card({ left, right }, props) {
    return (
        <div className="card-container">
            <div className="container_left">
                <h1>
                    {props.title}
                </h1>
                {left}
            </div>
            <div className="container_right">
                {right}
            </div>
        </div>
    );
}

export default Card;