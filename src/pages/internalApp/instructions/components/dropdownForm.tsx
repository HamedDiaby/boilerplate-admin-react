import { ChangeEvent, FC, useState } from "react";
import { Button, InputText, Subtitle, TextAreaInput } from "@components";

interface Props {
    defaultSectionTitle: string;
    defaultSectionDescription: string;
    sectionId: number;
    isGeneralSection: boolean;
    onChangeElement?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    onDeleteSection?: () => void;
    onSaveSection?: () => void;
}

export const DropdownForm: FC<Props> = ({
    defaultSectionTitle,
    defaultSectionDescription,
    sectionId,
    isGeneralSection,
    onChangeElement,
    onDeleteSection,
    onSaveSection,
}) => {
    const [sectionTitle, setSectionTitle] = useState<string>(defaultSectionTitle);
    const [sectionDescription, setSectionDescription] = useState<string>(defaultSectionDescription);

    return (
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />

            <div className="collapse-title font-semibold">
                <div className="flex items-center">
                    <Subtitle className="text-gray-400">{defaultSectionTitle}</Subtitle>
                </div>
            </div>

            <div className="collapse-content text-sm space-y-3">
                {
                    !isGeneralSection && (
                        <InputText 
                            name={`sectionTitle-${sectionId}`}
                            value={sectionTitle} 
                            onChange={(val) => {
                                setSectionTitle(val);
                                onChangeElement && onChangeElement({ target: { name: `sectionTitle-${sectionId}`, value: val } } as ChangeEvent<HTMLInputElement>);
                            }}
                        />
                    )
                }

                <TextAreaInput 
                    name={`sectionDescription-${sectionId}`}
                    value={sectionDescription} 
                    onChange={(val) => {
                        setSectionDescription(val);
                        onChangeElement && onChangeElement({ target: { name: `sectionDescription-${sectionId}`, value: val } } as ChangeEvent<HTMLTextAreaElement>);
                    }}
                />

                <div className="flex justify-between">
                    {(onDeleteSection && !isGeneralSection) && (
                        <Button 
                            onClick={onDeleteSection}
                            className="btn-error text-white"
                        >
                            Supprimer cette section
                        </Button>
                    )}

                    <Button
                        onClick={onSaveSection}
                        className="btn-info text-white"
                    >
                        Enregistrer
                    </Button>
                </div>
            </div>
        </div>
    );
};
