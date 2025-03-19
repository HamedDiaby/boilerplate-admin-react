import { FetchResponseType, Instructions } from "@utilities/types"
import { db, doc, getDoc } from "../config";
import { collectionsEnum } from "@utilities/enums";

const INSTRUCTION_ID = 'jTrhazZ9xfdXMcT3aCgI';

export const getInstruction = async(): Promise<FetchResponseType> => {
    try {
        
        const docRef = doc(db, collectionsEnum.INSTRUCTIONS, INSTRUCTION_ID);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
        return {
            code: 500,
            data: {
                message: "Instruction introuvable",
            },
        };
        }

        const getInstructions = docSnap.data() as Instructions;
        const instructions = {
            ...getInstructions,
            instructions: getInstructions.instructions.map(el=> ({
                ...el,
                defaultSectionTitle: el.sectionTitle,
            }))
        }

        return {
            code: 200,
            data: instructions,
        }

    } catch (error) {
        console.error({error})
        return {
            code: 500,
            data: {
                message: 'Impossible de recuperer les instruction'
            }
        }
    }
}
