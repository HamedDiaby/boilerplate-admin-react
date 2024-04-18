import React from "react";
import './styles.css';
import { ICheckbox } from "./interface";

import { Checkbox as CheckboxComponent } from "primereact/checkbox";

export const Checkbox:React.FC<ICheckbox> = ({
    label,
    checked,
    onCheckboxPress
})=> {

    return (
        <div className="flex align-items-center checkboxContainer">
            <CheckboxComponent 
                inputId="inProgress" 
                name={label}
                onChange={onCheckboxPress}
                checked={checked}
            />
            <label 
                htmlFor="inProgress" 
                className="ml-2"
            >{label}</label>
        </div>
    )
}