import { signinRequest } from "@data/signin";
import { AppDispatch } from "@data/store";
import { SignInActionPayloadRequest } from "@utilities/types";
import { useCallback } from "react";
import { useDispatch } from "react-redux"

// FR: Définit un hook personnalisé pour dispatcher l'action de connexion.
// EN: Defines a custom hook to dispatch the sign-in action.
export const useSigninDispatch = () => {

    // FR: Utilise useDispatch pour obtenir la fonction de dispatch typée.
    // EN: Uses useDispatch to get the typed dispatch function.
    const dispatch = useDispatch<AppDispatch>();

    // FR: Utilise useCallback pour mémoriser la fonction de connexion.
    // EN: Uses useCallback to memoize the sign-in function.
    const onSignin = useCallback((signinData: SignInActionPayloadRequest) => {
        // FR: Dispatch l'action de connexion avec les données de connexion fournies.
        // EN: Dispatches the sign-in action with the provided sign-in data.
        dispatch(signinRequest(signinData));
    }, [dispatch]);

    // FR: Retourne l'objet contenant la fonction onSignin.
    // EN: Returns the object containing the onSignin function.
    return {
        onSignin
    };
};
