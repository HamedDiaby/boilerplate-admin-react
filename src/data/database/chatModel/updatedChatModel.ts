import { collectionsEnum } from "@utilities/enums";
import { db, updateDoc, doc } from "../config";
import { FetchResponseType } from "@utilities/types"

export const updatedChatModel = async(
    chatModelId: string,
    updatedModel: string
): Promise<FetchResponseType> => {
    try {

        const docRef = doc(db, collectionsEnum.CHAT_MODEL, chatModelId);
        await updateDoc(docRef, {
            model: updatedModel
        }); 
        
        return {
            code: 200,
            data: 'Chat model mis à jour'
        }

    } catch (error) {
        return {
            code: 500,
            data: {
                message: 'Impossible de metre a jour le model'
            }
        }
    }
}
