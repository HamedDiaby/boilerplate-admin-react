export interface ITitle {
    label: string
    variant?: keyof TitleVariatType
    weight?: keyof TitleWeightType
    className?: string
}


interface TitleVariatType {
    h_xl: 'h_xl'
    h_md: 'h_md'
    h_sm: 'h_sm'
    h_xs: 'h_xs'
}

interface TitleWeightType {
    regular: 'regular'
    light: 'light'
    bold: 'bold'
}