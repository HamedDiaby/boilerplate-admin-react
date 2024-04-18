import { SignInActionPayloadRequest } from "@utilities/types";

export interface ISignin {
    onSignin: (signinData: SignInActionPayloadRequest)=> void
}
