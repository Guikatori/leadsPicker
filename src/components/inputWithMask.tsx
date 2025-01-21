import React, { ChangeEvent } from "react";
import "./InputTemplate.css"
import { InputMask } from '@react-input/mask';

interface InputProps{
    name?: string;
    placeholder: string;
    IsPhoneNumber?: boolean;
    onChange?:  (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

function MaskInput(props: InputProps){
        return (
        <div>
        <p className="p">{props.name}</p>
        {props.IsPhoneNumber ? <InputMask onChange={props.onChange} value={props.value} className="input" mask="(__) _____-____" replacement={{ _: /\d/ }} placeholder={props.placeholder}/> 
                             : <InputMask className="input" mask="___.___.___-__" replacement={{ _: /\d/ }} placeholder={props.placeholder}/>
        }
        </div>
    )
}

export default MaskInput;



