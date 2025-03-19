import { collectionsEnum } from "@utilities/enums";
import { db, updateDoc, doc } from "../config";
import { FetchResponseType, Instruction } from "@utilities/types"

export const saveInstruction = async(
    instructionID: string,
    updatedInstructions: Instruction[]
): Promise<FetchResponseType> => {
    try {

        const formatInstruction = updatedInstructions.map(({ defaultSectionTitle, ...rest }) => rest);

        const docRef = doc(db, collectionsEnum.INSTRUCTIONS, instructionID);
        await updateDoc(docRef, {
            instructions: formatInstruction
        }); 
        
        return {
            code: 200,
            data: 'Instruction mis à jour'
        }

    } catch (error) {
        return {
            code: 500,
            data: {
                message: 'Impossible de metre a jour les instructions'
            }
        }
    }
}
