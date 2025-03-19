import { FC, ReactNode } from "react";
import { PageTitleContextProvider } from "./pageTitleContext";

interface IAppContextProvider {
    children: ReactNode
}

export const AppContextProvider:FC<IAppContextProvider> = ({ children })=> {
    return (
        <PageTitleContextProvider>
            {children}
        </PageTitleContextProvider>
    )
}
