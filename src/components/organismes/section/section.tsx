import React from "react";
import './styles.css';
import { ISection } from "./interface";

export const Section:React.FC<ISection> = ({
    children,
    addShadow = false,
    className,
})=> {

    return (
        <div className={`tf_section ${addShadow && 'tf_shadow' } ${className}`}>
            {children}
        </div>
    )
} 