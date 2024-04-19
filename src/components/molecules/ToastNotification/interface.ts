export interface IToastNotification {
    displayMessage: boolean
    message: string
    onHide: ()=> void
    notificationType: keyof NotificationType
}

type NotificationType = {
    success: 'success'
    error: 'error'
    info: 'info',
    warn: 'warn',
}
