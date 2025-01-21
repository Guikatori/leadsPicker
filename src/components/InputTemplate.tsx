import React,{ ChangeEvent } from "react";
import "./InputTemplate.css"

interface InputProps{
    name?: string;
    placeholder: string;
    type: string;
    onChange?:  (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

function InputTemplate(props: InputProps){
        return (
        <div>
        <p className="p">{props.name}</p>
        <input placeholder={props.placeholder} className="input" type={props.type} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default InputTemplate;