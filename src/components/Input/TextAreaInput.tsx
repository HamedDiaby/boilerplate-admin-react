import { ChangeEvent, FC } from "react";

interface TextAreaInputProps {
    value: string;
    name?: string;
    labelTitle?: string;
    labelStyle?: string;
    containerStyle?: string;
    placeholder?: string;
    onChangeElement?: (e: ChangeEvent<HTMLTextAreaElement>)=> void
    onChange: (value: string) => void;
}

export const TextAreaInput: FC<TextAreaInputProps> = ({
    value,
    name,
    labelTitle,
    labelStyle,
    containerStyle,
    placeholder = "Enter text...",
    onChangeElement,
    onChange,
}) => {

    return (
        <div className={`form-control w-full ${containerStyle}`}>
            {
                labelTitle && (
                    <label className="label">
                        <span className={`label-text text-base-content ${labelStyle}`}>
                            {labelTitle}
                        </span>
                    </label>
                )
            }

            <textarea
                value={value}
                name={name}
                className="textarea textarea-bordered w-full bg-gray-100"
                placeholder={placeholder}
                rows={7}
                onChange={(e) => {
                    onChange(e.target.value);
                    onChangeElement && onChangeElement(e);
                }}
            />
        </div>
    );
};
