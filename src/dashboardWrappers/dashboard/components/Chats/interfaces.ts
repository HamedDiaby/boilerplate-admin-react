export interface IChats {
    messages: messageType[]
    onSendMessage: (message: string)=> void
}

export interface messageType {
    message: string
    date: Date
    isRead: boolean
    senderID: string
}
