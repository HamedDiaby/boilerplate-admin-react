import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
}

export const Button:FC<Props> = ({
    children,
    className,
    ...props
})=> {
    return (
        <button 
            {...props}
            className={`btn btn-xs sm:btn-sm md:btn-md btn-primary ${className} `}
        >{children}</button>
    )
}
