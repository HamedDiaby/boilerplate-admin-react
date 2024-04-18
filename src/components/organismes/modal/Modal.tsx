import React from "react";
import './styles.css';
import { IModal } from "./interface";
import { useScreenSize } from "@utilities/hooks";

import { Sidebar } from 'primereact/sidebar';
import { Dialog } from 'primereact/dialog';

export const Modal:React.FC<IModal> = ({
    isVisible,
    children,
    fullScreen = false,
    onClose,
})=> {

    const {isMobile} = useScreenSize();

    if(isMobile){
        return (
            <Sidebar 
                visible={isVisible} 
                position="bottom" 
                onHide={onClose}
                className={
                    fullScreen ? 
                    "tf_modal_bottom_fullScreen_container" : 
                    "tf_modal_bottom_container"
                }
            >
                {children}
            </Sidebar>
        )
    }

    return (
        <Dialog 
            visible={isVisible} 
            style={{ width: '50vw' }} 
            onHide={onClose}
            headerClassName="ad_modal"
            contentClassName="ad_modal"
        >
            {children}
        </Dialog>
    )
} 