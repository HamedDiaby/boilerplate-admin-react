import { EnumUserRole } from "@utilities/enums";
import { fetchRequest } from "@utilities/requests";
import { 
    FetchRequestType, 
    SignInActionPayloadRequest, 
    SignInActionPayloadSuccess,
} from "@utilities/types";

export const fetchSigninRequest = async(
    payload: SignInActionPayloadRequest
):Promise<SignInActionPayloadSuccess>=> {

    const requestConfig: FetchRequestType = {
        route: '/authentificated/signin',
        method: 'POST',
        data: payload,
    };

    try {
        //const response: SignInActionPayloadSuccess = await fetchRequest(requestConfig);
        //unmock
        const response = {
            firstname: 'John',
            lastname: 'Doe',
            email: 'john.doe@mail.com',
            role: EnumUserRole.admin,
        };
        return response;
    } catch (error) {
        console.error('Error in fetchSigninRequest:', error);
        throw error;
    }
};
