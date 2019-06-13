import React from "react";
import Card from "./card";


const Cardlist = ({robots}) => {

    return (
        <div>
            {
                robots.map(user => {
                    return <Card robotObj = {user} key = {user.id}/>
                })
            }
        </div>
    );
}

export default Cardlist;