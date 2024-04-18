export interface IButton {
    label: string
    buttonColor?: keyof buttonColorType
    customClassname?: string
    onButtonPress: ()=> void
}

interface buttonColorType {
    ad_primary: 'ad_primary'
    ad_secondary: 'ad_secondary' 
    ad_success: 'ad_success' 
    ad_info: 'ad_info' 
    ad_warning: 'ad_warning' 
    ad_danger: 'ad_danger' 
}
