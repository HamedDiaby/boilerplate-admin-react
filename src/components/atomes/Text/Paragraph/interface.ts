export interface IParagraph {
    label: string
    variant?: keyof ParagraphVariatType
    weight?: keyof ParagraphWeightType
    className?: string
    onParagraphClik?: ()=> void
}

interface ParagraphVariatType {
    p_xl: 'p_xl'
    p_md: 'p_md'
    p_sm: 'p_sm'
    p_xs: 'p_xs'
}

interface ParagraphWeightType {
    regular: 'regular'
    light: 'light'
    bold: 'bold'
}