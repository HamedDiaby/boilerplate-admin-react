import React from "react";
import './styles.css';
import { ISelect } from "./interface";

import { Dropdown } from 'primereact/dropdown';

export const Select:React.FC<ISelect> = ({
    value,
    options,
    placeholder,
    onChange,
})=> {

    return (
        <Dropdown
            value={value} 
            onChange={(e) => onChange(e.value)} 
            options={options} 
            placeholder={placeholder} 
            className="tf_select"
            panelClassName="tf_panelClassName"
        />
    )
}