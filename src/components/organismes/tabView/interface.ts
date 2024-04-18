import { ReactNode } from "react"

export interface ITabView {
    tabViewContent: TabViewContentType[]
}

interface TabViewContentType {
    headerTxt: string
    headerIcon: string
    content: ReactNode
}
