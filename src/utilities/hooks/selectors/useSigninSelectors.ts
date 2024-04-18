import { RootState } from "@data/store";
import { useSelector } from "react-redux";

// FR: Définit un hook personnalisé pour accéder aux sélecteurs de l'état de connexion.
// EN: Defines a custom hook to access the sign-in state selectors.
export const useSigninSelectors = () => {

    // FR: Utilise useSelector pour extraire `userIsAuthentificated` et `signinError` de l'état signin.
    // EN: Uses useSelector to extract `userIsAuthentificated` and `signinError` from the signin state.
    const { 
        userData,
        signinError
    } = useSelector((state: RootState) => state.signin);

    // FR: Retourne les valeurs `userIsAuthentificated` et `signinError` pour une utilisation dans les composants.
    // EN: Returns the `userIsAuthentificated` and `signinError` values for use in components.
    return {
        userData,
        signinError
    };
};

