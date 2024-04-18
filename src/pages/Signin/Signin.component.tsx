import React, { useCallback, useState } from "react";
import './styles.css';
import { ISignin } from "./interfaces";
import { useTranslation } from "@utilities/hooks";
import { Button, Input, Section, Title } from "@components";

export const SigninComponent:React.FC<ISignin> = ({
    onSignin
})=> {

    const translate = useTranslation();

    const [mail, setMail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignin = useCallback(()=> {
        if(mail && password){
            onSignin({
                email: mail,
                password,
            });
            setMail('');
            setPassword('');
        }
    }, [mail, password, onSignin])

    return (
        <div className="ad_signinContainer">
            <Section
                className="ad_signin_formContainer"
            >
                <Title 
                    label="connexion"
                    className="ad_signin_title"
                />

                <Input 
                    placeholder="email"
                    value={mail}
                    onChange={setMail}
                />
                <Input 
                    inputType='password'
                    placeholder="mot de passe"
                    value={password}
                    onChange={setPassword}
                />

                <Button 
                    label="connexion"
                    onButtonPress={handleSignin}
                    customClassname="ad_signin_button"
                />
            </Section>
        </div>
    )
}
