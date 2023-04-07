import "./Showcase.css"
import "./Showcase.css"
import React from "react";


export default function Showcase({child1, child2}){
    return(
        <div className="showcase-container">
            <div className="showcase__photo">
                {child1}
            </div>
            <div className="showcase__description">
                {child2}
            </div>
        </div>
    );
}
