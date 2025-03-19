import { usePageTitleContext } from "@utilities/hooks";
import { useEffect } from "react";

export const useControllers = () => {

    const { setPageTitle } = usePageTitleContext();

    useEffect(()=> {
        setPageTitle('Base de donnée');
    }, [setPageTitle]);

    return {
        
    };
};
