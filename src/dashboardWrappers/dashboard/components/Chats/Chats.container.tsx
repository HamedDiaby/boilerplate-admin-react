import React, { useCallback, useState } from "react";
import { ChatsComponent } from "./Chats.component"
import { messageType } from "./interfaces";

export const Chats:React.FC = ()=> {

    const [messages, setMessages] = useState<messageType[]>([]);

    const onSendMessage = useCallback((message: string)=> {
        setMessages(c=> [...c, {
            message: message,
            date: new Date(),
            isRead: false,
            senderID: 'userID'
        }]);

        // response
        setMessages(c=> [...c, {
            message: 'La reponse à ton message',
            date: new Date(),
            isRead: false,
            senderID: 'otherUserID'
        }]);
    }, []);

    return (
        <ChatsComponent
            messages={messages}
            onSendMessage={onSendMessage}
        />
    )
}
