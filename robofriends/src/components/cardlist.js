import React from "react";
import Card from "./card";


const Cardlist = ({robots}) => {
    return (
        <div>
            {
                robots.map(user => {
                    return <Card name={user.name} key={user.id}  email={user.email} id={user.id}/>
                })
            }
        </div>
    );
}

export default Cardlist;