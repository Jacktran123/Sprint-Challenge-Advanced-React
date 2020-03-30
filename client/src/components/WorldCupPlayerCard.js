import React from 'react'
import "./WorldCupPlayerCard.css"

export default function WorldCupPlayerCard (props){
    return(
       <div className="cardcontainer">
        {props.data.map(woman=>
        <div className="card" key={woman.id}>

           <p>Name: {woman.name}</p>
           <img  alt="" src="https://upload.wikimedia.org/wikipedia/commons/1/10/Alex_Morgan_May19.jpg"/>
           <p>Country: {woman.country}</p>
           <p>Searches: {woman.searches}</p>
        </div>)}
        
       </div>
    );
}

