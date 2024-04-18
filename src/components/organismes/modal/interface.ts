import { ReactNode } from "react"

export interface IModal {
    isVisible: boolean
    children: ReactNode
    fullScreen?: boolean
    onClose: ()=> void
}
