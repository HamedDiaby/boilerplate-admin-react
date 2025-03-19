import { FC } from "react";
import { PageContent } from "./PageContent";
import { LeftSidebar } from "./LeftSidebar";

export const Layout:FC = ()=> {
    return (
        <>
            <div className="drawer  lg:drawer-open">
                <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />

                <PageContent />
                <LeftSidebar />
            </div>
        </>
    )
}
