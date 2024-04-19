import React, { useCallback, useState } from "react";
import { AccountComponent } from "./Account.component"
import { useSigninDispatch } from "@utilities/hooks";

export const Account:React.FC = ()=> {

    const {onLogout} = useSigninDispatch();
    const [updatedPasswordSuccessMessage, setUpdatedPasswordSuccessMessage] = useState<string>('');

    const onUpdatedPassword = useCallback((
        currentPassword: string,
        newPassword: string,
        confirmNewPassword: string
    )=> {
        
        setUpdatedPasswordSuccessMessage('Mot passe modifié avec succès !')
    }, []);

    return (
        <AccountComponent 
            onLogout={onLogout}
            onUpdatedPassword={onUpdatedPassword}
            updatedPasswordSuccessMessage={updatedPasswordSuccessMessage}
            setUpdatedPasswordSuccessMessage={setUpdatedPasswordSuccessMessage}
        />
    )
}
