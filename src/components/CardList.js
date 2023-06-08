import React from "react";
import Card from "../components/Card";

// for accessing every cards present in robots
const CardList = ({ robots }) => {
    return (
        <div>
        {
            robots.map((user,i) =>{
                return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                    />
                );
            })
        }
        </div>
    );
}

export default CardList;