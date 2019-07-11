import React from "react";

const search = ({searchPokemon}) => {
    return (
        <input className="search" placeholder="Please enter pokemon name here" type="text" onChange={searchPokemon}/>
    )
}

export default search;