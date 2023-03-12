import "./Card.css"
import React from "react";
import { useState } from "react";

function Card(props) {
    const [title, setTitle] = useState("To-Do")

    return (


        <div className="card">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card__content">
                {props.title}
            </div>
        </div>
    );
}

export default Card;