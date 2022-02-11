import React, { useState }  from 'react';
import { render } from "react-dom";
import "./index.css"
import {List} from "./List.jsx"

function Compteur(){
    
 
    const [count, setCount] =  useState(0)
    const handleClick = (e) => {
        e.preventDefault()
        setCount(10)
    }
        return <button onClick={handleClick}>Nombre: {count}</button>
    
}

render(
<div> 
    <Compteur />
</div>,
    document.getElementById('app')
    )