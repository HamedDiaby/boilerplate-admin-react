import { ChatModel, FetchResponseType } from "@utilities/types"
import { db, doc, getDoc } from "../config";
import { collectionsEnum } from "@utilities/enums";

const CHAT_MODEL_ID = '6VSWi5fCIDPHAs1nybSz';

export const getChatModel = async(): Promise<FetchResponseType> => {
    try {
        
        const docRef = doc(db, collectionsEnum.CHAT_MODEL, CHAT_MODEL_ID);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
        return {
            code: 500,
            data: {
                message: "Chat model introuvable",
            },
        };
        }

        const chatModel = docSnap.data() as ChatModel;

        return {
            code: 200,
            data: chatModel,
        }

    } catch (error) {
        console.error({error})
        return {
            code: 500,
            data: {
                message: 'Impossible de recuperer le model'
            }
        }
    }
}
