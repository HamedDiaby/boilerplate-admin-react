import React from "react";
import './styles.css';
import { IInput } from "./interface";

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Password } from 'primereact/password';
import { InputNumber } from 'primereact/inputnumber';

export const Input:React.FC<IInput> = ({
    value,
    inputType = 'text',
    width,
    placeholder,
    onChange,
})=> {

    if(inputType === 'textarea'){
        return (
            <InputTextarea 
                placeholder={placeholder}
                value={value} 
                onChange={(e) => onChange(e.target.value)}
                autoResize 
                rows={5}
                className="tf_input"
                style={{width: width}}
            />
        )
    }

    if(inputType === 'password'){
        return (
            <Password 
                placeholder={placeholder}
                value={value} 
                onChange={(e) => onChange(e.target.value)}
                className="tf_input"
                inputClassName="tf_input tf_inputClassName"
                style={{width: width}}
            />
        )
    }

    if(inputType === 'number'){
        return (
            <InputNumber 
                placeholder={placeholder}
                value={Number(value)} 
                onChange={(e) => onChange(String(e.value))}
                className="tf_input"
                inputClassName="tf_input tf_inputClassName"
                style={{width: width}}
            />
        )
    }

    return (
        <InputText 
            size='small'
            placeholder={placeholder}
            value={value} 
            onChange={(e) => onChange(e.target.value)}
            className="tf_input"
            style={{width: width}}
        />
    )
}