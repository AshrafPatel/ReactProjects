import React from "react"
import heads from "./heads.jpg"
import tails from "./tails.jpg"
import "./Coin.css"

function Coin(props) {
    const {headsOrTails} = props;
    return (
        <img className="coin" src={headsOrTails ? heads : tails}/>
    )
}

export default Coin