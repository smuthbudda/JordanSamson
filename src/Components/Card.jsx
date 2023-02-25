import "./Card.css"
import React from "react";
import { useState } from "react";

function Card(props) {
    const [title, setTitle] = useState("To-Do")

    return (


        <div class="card">
            <div class="tools">
                <div class="circle">
                    <span class="red box"></span>
                </div>
                <div class="circle">
                    <span class="yellow box"></span>
                </div>
                <div class="circle">
                    <span class="green box"></span>
                </div>
            </div>
            <div class="card__content">
                {props.title}
            </div>
        </div>
    );
}

export default Card;