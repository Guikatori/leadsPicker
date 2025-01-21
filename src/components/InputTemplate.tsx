import React from "react";
import "./InputTemplate.css"

interface InputProps{
    name: string;
    PlaceHolder: string;
}

function InputTemplate(props: InputProps){
    return (
        <div>
        <p className="p">{props.name}</p>
        <input placeholder={props.PlaceHolder} className="input"/>
        </div>
    )
}

export default InputTemplate;