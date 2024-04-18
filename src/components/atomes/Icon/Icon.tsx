import React from "react";
import './styles.css';
import { IIcon } from "./interface";

export const Icon:React.FC<IIcon> = ({
    iconName,
    size = 14,
    colors = '#4A4A4A',
    onIconPress,
})=> {

    return (
        <i 
            onClick={onIconPress}
            className={String(iconName)}
            style={{
                fontSize: size,
                color: colors,
                cursor: onIconPress && 'pointer'
            }}
        />
    )
}