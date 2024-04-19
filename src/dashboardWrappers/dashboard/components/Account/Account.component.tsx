import React, { useCallback, useState } from "react";
import './styles.css';
import { IAccount } from "./interfaces";
import { useTranslation } from "@utilities/hooks";
import { Button, Input, Paragraph, Title, ToastNotification } from "@components";

export const AccountComponent:React.FC<IAccount> = ({
    updatedPasswordSuccessMessage,
    setUpdatedPasswordSuccessMessage,
    onLogout,
    onUpdatedPassword,
})=> {

    const translate = useTranslation();

    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

    const [warningMessage, setWarningMessage] = useState<string>('');

    const handleUpdatedPassword = useCallback(()=> {
        if(!(currentPassword && confirmNewPassword && newPassword)){
            setWarningMessage('Remplissez tous les champs !');
            return;
        }
        if(currentPassword === newPassword){
            setWarningMessage('Le mot de passe actuelle et le nouveau doinvent etre différent !');
            return;
        }
        if(confirmNewPassword !== newPassword){
            setWarningMessage('Les nouveaux mots de passes doivent etre identiques !');
            return;
        }

        onUpdatedPassword(
            currentPassword,
            newPassword,
            confirmNewPassword,
        );

        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    }, [confirmNewPassword, currentPassword, newPassword, onUpdatedPassword]);

    return (
        <div className="ad_account_container">
            <Title 
                label="Mon compte"
                weight='regular'
                className="ad_account_title"
            />

            <div>
                <Title 
                    label="Mes infos"
                    variant='h_sm'
                    weight='regular'
                    className="ad_account_title"
                />

                <Paragraph 
                    label="John Doe"
                    variant='p_xl'
                    className="ad_account_txt"
                />
                <Paragraph 
                    label="john.doe@mail.com"
                    variant='p_xl'
                    className="ad_account_txt"
                />
            </div>

            <div className="ad_account_subContainer">
                <Title 
                    label="Mot de passe"
                    variant='h_sm'
                    weight='regular'
                    className="ad_account_title"
                />

                <Input 
                    inputType='password'
                    placeholder="Mot de passe actuel"
                    value={currentPassword}
                    onChange={setCurrentPassword}
                />
                <Input 
                    inputType='password'
                    placeholder="Nouveau mot de passe"
                    value={newPassword}
                    onChange={setNewPassword}
                />
                <Input 
                    inputType='password'
                    placeholder="Confirmer le nouveau mot de passe"
                    value={confirmNewPassword}
                    onChange={setConfirmNewPassword}
                />

                <Button 
                    label="mèttre à jour"
                    buttonColor='ad_success'
                    onButtonPress={handleUpdatedPassword}
                />
            </div>

            <Button 
                label="deconnexion"
                buttonColor='ad_danger'
                onButtonPress={onLogout}
            />

            <ToastNotification 
                displayMessage={!!warningMessage}
                onHide={()=> setWarningMessage('')}
                notificationType='warn'
                message={warningMessage}
            />
            <ToastNotification 
                displayMessage={!!updatedPasswordSuccessMessage}
                onHide={()=> setUpdatedPasswordSuccessMessage('')}
                notificationType='success'
                message={updatedPasswordSuccessMessage}
            />
        </div>
    )
}
