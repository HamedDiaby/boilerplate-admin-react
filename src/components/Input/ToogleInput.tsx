import { FC, useCallback, useState } from "react";

interface ToggleInputProps {
    labelTitle: string;
    labelStyle?: string;
    containerStyle?: string;
    defaultValue?: boolean;
    updateFormValue: (data: { updateType: string; value: boolean }) => void;
    updateType: string;
}

export const ToggleInput: FC<ToggleInputProps> = ({
    labelTitle,
    labelStyle = "",
    containerStyle = "",
    defaultValue = false,
    updateFormValue,
    updateType,
}) => {

    const [value, setValue] = useState<boolean>(defaultValue);

    const updateToggleValue = useCallback(() => {
        const newValue = !value;
        setValue(newValue);
        updateFormValue({ updateType, value: newValue });
    }, [updateFormValue, updateType, value]);

    return (
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label cursor-pointer">
                <span className={`label-text text-base-content ${labelStyle}`}>
                    {labelTitle}
                </span>

                <input
                    type="checkbox"
                    className="toggle"
                    checked={value}
                    onChange={updateToggleValue}
                />
            </label>
        </div>
    );
};
