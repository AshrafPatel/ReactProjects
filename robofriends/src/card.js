import React from "react"

const Card = (props) => {
    return (
        <div className="tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${props.robotObj.id}?200x200`}/>
            <div>
                <h2>{props.robotObj.name}</h2>
                <p>{props.robotObj.email}</p>
            </div>
        </div>
    )
}

export default Card