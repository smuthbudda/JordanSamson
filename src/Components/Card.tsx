import "./Card.css"
import React from "react";


type Props = {
    children: string,
  }

function Card(props : Props) {
    return (
        <div className="card-container">
            {props.children}
        </div>
    );
}

export default Card;