import React from "react";
import './styles.css';
import { IButton } from "./interface";

import { Button as ButtonComponent } from 'primereact/button';

export const Button:React.FC<IButton> = ({
    label,
    buttonColor = 'ad_primary',
    onButtonPress,
    customClassname
})=> {

    return (
        <ButtonComponent 
            size='small'
            rounded
            label={label}
            onClick={onButtonPress}
            className={`td_button_base ${buttonColor} ${customClassname}`}
        />
    )
}