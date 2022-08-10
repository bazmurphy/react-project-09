import React from "react";

export default function Star(props) {
    // console.log(props)
    let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

    return (
        <div>
            <img src={`../images/${starIcon}`} className="card--favorite" onClick={props.passFunctionToChild}/>
        </div>
    );
}