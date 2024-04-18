import React, { useMemo } from "react";
import './styles.css';
import { IParagraph } from "./interface";

export const Paragraph:React.FC<IParagraph> = ({
    label,
    variant = 'p_md',
    weight = 'regular',
    className,
    onParagraphClik,
})=> {

    const fontSize = useMemo(()=> {
        switch (variant) {
            case 'p_xl':
                return 18;
            case 'p_md':
                return 14;
            case 'p_sm':
                return 12;
            case 'p_xs':
                return 8;
            default:
                return 14;
        }
    }, [variant]);

    const fontFamily = useMemo(()=> {
        switch (weight) {
            case 'bold':
                return 'ft_paragraph_bold';
            case 'regular':
                return 'ft_paragraph_regular';
            case 'light':
                return 'ft_paragraph_light';
            default:
                return 'ft_paragraph_regular';
        }
    }, [weight]);

    return (
        <p 
            style={{
                fontSize: fontSize,
                cursor: onParagraphClik && 'pointer'
            }}
            className={`ft_paragraph ${fontFamily} ${className}`}
            onClick={onParagraphClik}
        >
            {label}
        </p>
    )
}