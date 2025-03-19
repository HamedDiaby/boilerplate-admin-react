import { PageTitleContext } from "@data/contexts";
import { useContext } from "react";

export const usePageTitleContext = ()=> {

    const { pageTitle, setPageTitle } = useContext(PageTitleContext);

    return {
        pageTitle, setPageTitle
    }
}
