export interface Instructions {
    _id: string
    instructions: Instruction[]
}

export interface Instruction {
    index: number
    defaultSectionTitle?: string
    sectionTitle: string 
    sectionDescription: string
    isGeneralSection: boolean
}
