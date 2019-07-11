import React from "react";
import "./search.css"

const search = ({searchPokemon}) => {
    return (
        <input className="search" placeholder="Please enter pokemon name here" type="text" onChange={searchPokemon}/>
    )
}

export default search;