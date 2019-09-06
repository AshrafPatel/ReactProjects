import React from "react"

function Summary(props) {
    const {headsCounter, tailsCounter} = props;
    const totalTosses = headsCounter + tailsCounter;
    return (
        <p>Out of {totalTosses} flips, there have been {headsCounter} heads and {tailsCounter} tails.</p>
    )
}

export default Summary