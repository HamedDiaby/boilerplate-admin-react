import { EnumIconName } from "@utilities/enums";

export interface IIcon {
    iconName: EnumIconName
    size?: number
    colors?: string
    onIconPress?: ()=> void
}