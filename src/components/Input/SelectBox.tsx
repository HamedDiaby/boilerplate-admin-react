import { FC, useCallback, useEffect, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

interface Option {
    value: string;
    name: string;
}

interface SelectBoxProps {
    labelTitle: string;
    labelDescription?: string;
    defaultValue?: string;
    containerStyle?: string;
    placeholder?: string;
    labelStyle?: string;
    options: Option[];
    updateFormValue: (value: string) => void;
}

export const SelectBox: FC<SelectBoxProps> = ({
    labelTitle,
    labelDescription,
    defaultValue = "",
    containerStyle = "",
    placeholder = "Select an option",
    labelStyle = "",
    options = [],
    updateFormValue,
}) => {
    
    const [value, setValue] = useState<string>(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const updateValue = useCallback((newValue: string) => {
        updateFormValue(newValue);
        setValue(newValue);
    }, [updateFormValue]);

    return (
        <div className={`inline-block ${containerStyle}`}>
            <label className={`label ${labelStyle}`}>
                <span className="label-text flex items-center gap-1">
                {labelTitle}
                {labelDescription && (
                    <div className="tooltip tooltip-right" data-tip={labelDescription}>
                        <InformationCircleIcon className="w-4 h-4" />
                    </div>
                )}
                </span>
            </label>

            <select
                className="select select-bordered w-full"
                value={value}
                onChange={(e) => updateValue(e.target.value)}
            >
                <option disabled value="">
                    {placeholder}
                </option>

                {options.map((o, k) => (
                    <option value={o.value || o.name} key={k}>
                        {o.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
