import React, { useEffect } from "react";
import { SigninComponent } from "./Signin.component"
import { 
    useNavigation, 
    useSigninDispatch, 
    useSigninSelectors,
} from "@utilities/hooks";
import { NavigationPathsEnum } from "@utilities/enums";

export const Signin:React.FC = ()=> {

    const {navigateTo} = useNavigation();
    const {userData, signinError} = useSigninSelectors();
    const {onSignin} = useSigninDispatch();

    useEffect(()=> {
        if(userData){
            navigateTo(NavigationPathsEnum.HOME);
        }
    }, [userData, navigateTo]);

    return (
        <SigninComponent 
            onSignin={onSignin}
        />
    )
}
