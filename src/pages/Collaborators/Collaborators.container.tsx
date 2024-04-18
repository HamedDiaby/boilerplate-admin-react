import React, { useCallback } from "react";
import { CollaboratorsComponent } from "./Collaborators.component"
import { SignInActionPayloadSuccess } from "@utilities/types";

export const Collaborators:React.FC = ()=> {

    const onAddNewCollab = useCallback((collab: SignInActionPayloadSuccess)=> {
        console.log(collab);
    }, []);

    return (
        <CollaboratorsComponent 
            onAddNewCollab={onAddNewCollab}
        />
    )
}
