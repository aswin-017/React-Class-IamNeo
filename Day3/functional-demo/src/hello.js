import React from "react";
import './hello.css';
function Hello(props)
{
    return (

        
        <form>
            <label className="label">{props.value}</label>
            <input className="input"placeholder={props.placeholder} type={props.type}></input>
        </form>
        
    )
    
}
export default Hello;