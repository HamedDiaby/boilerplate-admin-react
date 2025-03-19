import { FC, useCallback } from "react";
import { DropdownForm } from "./components";
import { useControllers } from "./useControllers";
import { Button, SelectBox, Title } from "@components";

export const Instructions: FC = () => {
    const { 
        sections, openAIChatmodels, chatModel,
        handleUpdatedChatModel,
        handleChangeSection, handleSaveSection,
        handleDeleteSection, handleAddSection,
    } = useControllers();

    const renderButtonAddSection = useCallback(()=> {
        return (
            <Button onClick={handleAddSection} className="btn-success text-white">
                Ajouter une section
            </Button>
        )
    }, [handleAddSection]);

    const renderSelectModel = useCallback(()=> {

        const defaultValue = chatModel?.model || '';

        return (
            <div className="absolute right-11">
                <SelectBox 
                    options={openAIChatmodels}
                    labelTitle=""
                    labelStyle="hidden"
                    placeholder="Selectionnez un model"
                    containerStyle="w-72"
                    defaultValue={defaultValue}
                    updateFormValue={handleUpdatedChatModel} 
                /> 
            </div>
        )
    }, [
        chatModel, openAIChatmodels,
        handleUpdatedChatModel,
    ]);

    return (
        <div className="p-4">

            {renderSelectModel()}

            <div className="space-y-4 mt-10">
                <Title className="text-gray-500 ml-5">
                    • DIRECTIVES GÉNÉRALES
                </Title>
                {
                    sections.slice(0, 4).map((section) => (
                        <DropdownForm
                            key={section.index}
                            defaultSectionTitle={section.defaultSectionTitle!}
                            defaultSectionDescription={section.sectionDescription}
                            sectionId={section.index}
                            isGeneralSection={section.isGeneralSection}
                            onChangeElement={handleChangeSection}
                            onDeleteSection={() => handleDeleteSection(section.index)}
                            onSaveSection={handleSaveSection}
                        />
                    ))
                }
            </div>

            <div className="space-y-4 mt-10">
                <div className="flex items-center justify-between">
                    <Title className="text-gray-500 ml-5">
                        • BASE DE CONNAISSANCE
                    </Title>

                    {renderButtonAddSection()}
                </div>

                {
                    sections.slice(4).map((section) => (
                        <DropdownForm
                            key={section.index}
                            defaultSectionTitle={section.defaultSectionTitle!}
                            defaultSectionDescription={section.sectionDescription}
                            sectionId={section.index}
                            isGeneralSection={section.isGeneralSection}
                            onChangeElement={handleChangeSection}
                            onDeleteSection={() => handleDeleteSection(section.index)}
                            onSaveSection={handleSaveSection}                        
                        />
                    ))
                }

                {
                    sections.length > 4 && (
                        <div className="flex justify-center">
                            {renderButtonAddSection()}
                        </div>
                    )
                }
            </div>
        </div>
    );
};
