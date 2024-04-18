import { SignInActionPayloadSuccess } from "@utilities/types";

export interface ICollaborators {
    onAddNewCollab: (collab: SignInActionPayloadSuccess)=> void
}
