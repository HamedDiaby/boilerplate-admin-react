import { 
    FetchRequestType, 
    FetchResponseType,
} from "@utilities/types";

// FR: Définit une fonction asynchrone pour effectuer des requêtes HTTP.
// EN: Defines a function to perform HTTP requests.
export const fetchRequest = ({
    route,           
    method,         
    accessToken,     
    data,           
}: FetchRequestType): FetchResponseType => {

    let Authorization;

    // FR: Configure l'en-tête Authorization si un jeton d'accès est fourni.
    // EN: Sets up the Authorization header if an access token is provided.
    if (accessToken) {
        Authorization = { 'Authorization': `Bearer ${accessToken}` };
    }

    // FR: Exécute la requête HTTP en utilisant fetch.
    // EN: Executes the HTTP request using fetch.
    return fetch(`${process.env.REACT_APP_BASE_URL}${route}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...Authorization,                  
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        return data;
    }).catch(error => {
        return error;
    });
}
