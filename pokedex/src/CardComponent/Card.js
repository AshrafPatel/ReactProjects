import React from "react";
import "./card.css"

const card = ({name, exp, image, types, color}) => {
    let colorCode;
    if (color.length === 1) {
        colorCode = "linear-gradient(" + color[0] + ", #000)"
    } else {
        colorCode = "linear-gradient(" + color[0] + ", " + color[1] + ")"
    }

    return (
        <div className="card" style={{background: colorCode, boxShadow: "5px 3px black"}}>
            <h2 className="card-name">{name}</h2>
            <img className="card-image" src={image} alt="pokemon"/>
            <h3 className="card-exp">exp: {exp}</h3>
            <div className="type-container">
                {types}
            </div>
        </div>
    )
}

export default card;