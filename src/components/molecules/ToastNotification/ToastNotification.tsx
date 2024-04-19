import React, { useCallback, useEffect, useRef, useState } from "react";
import './styles.css';
import { IToastNotification } from "./interface";

import { Toast } from 'primereact/toast';

export const ToastNotification:React.FC<IToastNotification> = ({
    notificationType,
    displayMessage,
    message,
    onHide,
})=> {

    const toastTopCenter = useRef<any>(null);

    const showMessage = useCallback(() => {;

        toastTopCenter.current?.show({ 
            severity: notificationType, 
            detail: message, 
            life: 10000,
        });
        onHide();
    }, [message, notificationType, onHide]);

    useEffect(()=> {
        if(displayMessage){
            showMessage();
        }
    }, [displayMessage, notificationType, showMessage]);

    return (
        <Toast 
            ref={toastTopCenter} 
            position="top-center"
            className="ad_toat"
        />
    )
}