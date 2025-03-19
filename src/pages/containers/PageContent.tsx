import { FC, useEffect, useRef } from "react";
import { Header } from "./Header";
import { InternalPageNavigation } from "@navigations";

export const PageContent:FC = ()=> {

    const mainContentRef = useRef<any>(null);

    useEffect(() => {
        mainContentRef.current.scroll({
            top: 0,
            behavior: "smooth"
          });
    }, []);

    return (
        <div className="drawer-content flex flex-col ">
            <Header />

            <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200" ref={mainContentRef}>
                <InternalPageNavigation />

                <div className="h-16"></div>
            </main>
        </div> 
    )
}
