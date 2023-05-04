import "./Showcase.css"
import "./Showcase.css"
import React from "react";

type props = {
    left : boolean
}

type childProps = {
    child1?: React.ReactNode;
    child2?: React.ReactNode;
  };


//I really do not like this function. 
export default function Showcase({ child1 , child2 } :childProps, props : props ) {
    const left = props.left;
    if (left) {
        return (
            <div className={"showcase-container"}>
                <div className="showcase__photo">
                    {child1}
                </div>
                <div className="showcase__description">
                    {child2}
                </div>
            </div>
        )
    } else {
        return (
            <div className={"showcase-container"}>
                <div className="showcase__photo-right">
                    {child1}
                </div>
                <div className="showcase__description-right">
                    {child2}
                </div>
            </div>
        )
    }
}
