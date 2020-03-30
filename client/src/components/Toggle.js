import React from 'react';
import './Toggle.css';
import {useGradient} from '../hooks/useGradient';


export default function Toggle(){
    const [changeBackground]= useGradient()
    return(
        <>
        <h1> Women of the World Cup</h1> 
        <div className="purple-button" onClick={()=>changeBackground()}></div>
        </>
    );
}
