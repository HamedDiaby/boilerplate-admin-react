export interface IInput {
    value: string
    inputType?: keyof inputType
    placeholder?: string
    width?: number
    onChange: (e: string)=> void
}

interface inputType {
    password: 'password'
    text: 'text'
    number: 'number'
    textarea: 'textarea'
}
