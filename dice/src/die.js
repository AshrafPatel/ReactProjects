import React from "react";
import "./die.css"

function Die(props) {
    const {face, rolling} = props;

    return (
        <i className={`die fas fa-dice-${face} ${rolling && 'wobble'}`}/>
    )
}

export default Die;