export interface ISelect {
    value: string
    options: string[]
    placeholder?: string
    onChange: (e: string)=> void
}
