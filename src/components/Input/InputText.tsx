import { ChangeEvent, FC } from "react";

interface Props {
    value: string;
    type?: string;
    name?: string;
    labelTitle?: string;
    labelStyle?: string;
    containerStyle?: string;
    placeholder?: string;
    onChangeElement?: (e: ChangeEvent<HTMLInputElement>)=> void
    onChange: (value: string) => void;
}

export const InputText: FC<Props> = ({
    value, 
    type = 'text',
    name = '',
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
                        <span className={`label-text text-base-content ${labelStyle}`}>{labelTitle}</span>
                    </label>
                )
            }
            
            <input 
                type={type}
                name={name}
                value={value} 
                placeholder={placeholder} 
                onChange={(e) => {
                    onChange(e.target.value);
                    onChangeElement && onChangeElement(e);
                }}
                className="input input-bordered w-full bg-gray-100" 
            />
        </div>
    );
};
