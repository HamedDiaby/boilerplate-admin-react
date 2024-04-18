import { EnumUserRole } from "@utilities/enums";
import { ErrorType } from "./error.type";

export interface SignInActionPayloadRequest {
    email: string
    password: string
}

export interface SignInActionPayloadSuccess {
    firstname: string
    lastname: string
    email: string
    role: EnumUserRole | string
}

export interface SignInInitialStateType {
    userData: SignInActionPayloadSuccess | null
    signinError: ErrorType | null
}
