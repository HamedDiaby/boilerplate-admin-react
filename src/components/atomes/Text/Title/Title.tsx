import React, { useMemo } from "react";
import './styles.css';
import { ITitle } from "./interface";

export const Title:React.FC<ITitle> = ({
    label,
    variant = 'h_md',
    weight = 'bold',
    className,
})=> {

    const fontSize = useMemo(()=> {
        switch (variant) {
            case 'h_xl':
                return '2em';
            case 'h_md':
                return '1.5em';
            case 'h_sm':
                return '1.17em';
            case 'h_xs':
                return '1em';
            default:
                return '1.5em';
        }
    }, [variant]);

    const fontFamily = useMemo(()=> {
        switch (weight) {
            case 'bold':
                return 'ft_title_bold';
            case 'regular':
                return 'ft_title_regular';
            case 'light':
                return 'ft_title_light';
            default:
                return 'ft_title_regular';
        }
    }, [weight]);

    return (
        <h1
            style={{
                fontSize: fontSize,
            }}
            className={`ft_title ${fontFamily} ${className}`}
        >
            {label}
        </h1>
    )
}