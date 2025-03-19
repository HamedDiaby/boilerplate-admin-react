import { getChatModel, getInstruction, saveInstruction, updatedChatModel } from "@data/database";
import { openAIChatmodels } from "@utilities/constants";
import { usePageTitleContext } from "@utilities/hooks";
import { ChatModel, Instruction, Instructions } from "@utilities/types";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

// const instructionsBase:Instruction[] = [
//     { 
//         index: 1, 
//         defaultSectionTitle: "Introduction",
//         sectionTitle: "Introduction", 
//         sectionDescription: "",
//         isGeneralSection: true,
//     },
//     { 
//         index: 2, 
//         defaultSectionTitle: "Formatage standardisé",
//         sectionTitle: "Formatage standardisé", 
//         sectionDescription: "",
//         isGeneralSection: true,
//     },
//     { 
//         index: 3, 
//         defaultSectionTitle: "Concision et convivialité",
//         sectionTitle: "Concision et convivialité", 
//         sectionDescription: "",
//         isGeneralSection: true,
//     },
//     { 
//         index: 4, 
//         defaultSectionTitle: "Interactions personnalisées et proactives",
//         sectionTitle: "Interactions personnalisées et proactives", 
//         sectionDescription: "",
//         isGeneralSection: true,
//     },
// ];

export const useControllers = () => {

    const { setPageTitle } = usePageTitleContext();

    const [instructions, setInstructions] = useState<Instructions | null>(null); 
    const [sections, setSections] = useState<Instruction[]>([]);
    const [chatModel, setChatModel] = useState<ChatModel | null>(null);

    useEffect(()=> {
        setPageTitle('Instructions');
        getChatInstructions();
        getUseChatModel();
    }, [setPageTitle]);

    const getUseChatModel = useCallback(async()=> {
        const req = await getChatModel();
        if(req.code === 200){
            setChatModel(req.data);
        }
    }, []);

    const getChatInstructions = useCallback(async()=> {
        const req = await getInstruction();
        if(req.code === 200){
            setInstructions(req.data);
            setSections(req.data.instructions);
        }
    }, []);

    const handleUpdatedChatModel = useCallback(async(newModel: string)=> {
        if(chatModel){
            const reqSave = await updatedChatModel(chatModel._id, newModel);
            if(reqSave.code === 200){
                await getUseChatModel();
                alert('Model mis à jours');
            }
        }
    }, [chatModel, getUseChatModel]);

    // Mise à jour dynamique d'une section en utilisant son ID
    const handleChangeSection = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            const [field, id] = name.split("-"); // Extraction du champ et de l'ID
            setSections((prevSections) =>
                prevSections.map((section) =>
                    section.index === Number(id) ? { ...section, [field]: value } : section
                )
            );
        },
        []
    );

    // Ajouter une nouvelle section
    const handleAddSection = useCallback(() => {
        const newId = sections.length > 0 ? sections[sections.length - 1].index + 1 : 1;
        setSections([
            ...sections, { 
                index: newId, 
                defaultSectionTitle: `Section ${newId}`, 
                sectionTitle: `Section ${newId}`, 
                sectionDescription: "",
                isGeneralSection: false,
            }
        ]);
    }, [sections]);

     // Supprimer une section
     const handleDeleteSection = useCallback(async(index: number) => {
        if(instructions){
            setSections((prevSections) => prevSections.filter((section) => section.index !== index));

            const sectionExistInDB = instructions.instructions.find(section=> section.index === index);
            if(sectionExistInDB){
                const reqSave = await saveInstruction(
                    instructions._id, 
                    instructions.instructions.filter((section) => section.index !== index)
                );
                if(reqSave.code === 200){
                    await getChatInstructions();
                }
            }
        }
    }, [getChatInstructions, instructions]);

    const handleSaveSection = useCallback(async()=> {
        if(instructions && sections){
            const reqSave = await saveInstruction(instructions._id, sections);
            if(reqSave.code === 200){
                await getChatInstructions();
                alert('Section mis à jours');
            }
        }
    }, [getChatInstructions, instructions, sections]);

    return {
        sections, openAIChatmodels,
        chatModel,
        handleUpdatedChatModel,
        handleChangeSection,
        handleSaveSection,
        handleDeleteSection,
        handleAddSection,
    };
};
