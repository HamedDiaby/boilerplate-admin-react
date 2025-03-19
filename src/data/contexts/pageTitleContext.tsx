import { createContext, FC, ReactNode, useEffect, useState } from "react";

enum persistDataEnum {
    pageTitle = 'pageTitle',
}

interface IPageTitleContextProvider {
    children: ReactNode
}

interface IPageTitleContext {
    pageTitle: string
    setPageTitle: React.Dispatch<string>
}

export const PageTitleContext = createContext<IPageTitleContext>({
    pageTitle: '',
    setPageTitle: () => {},
});

export const PageTitleContextProvider:FC<IPageTitleContextProvider> = ({ children })=> {

    const [pageTitle, setPageTitle] = useState<string>(()=> {
        const savedPageTitleData = localStorage.getItem(persistDataEnum.pageTitle);
        return savedPageTitleData ? JSON.parse(savedPageTitleData) : null;
    });

    useEffect(()=> {
        localStorage.setItem(persistDataEnum.pageTitle, JSON.stringify(pageTitle));
    }, [pageTitle]);

    return (
        <PageTitleContext.Provider 
            value={{ 
                pageTitle, setPageTitle
            }}
        >
            {children}
        </PageTitleContext.Provider>
    )
}
