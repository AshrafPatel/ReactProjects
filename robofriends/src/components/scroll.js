import React from "react"

const Scroll = (props) => {
    return (
        <div style={{overflowY: "auto", border: "1px black ridge", height: "900px"}}>
            {props.children}
        </div>
    )
}

export default Scroll;