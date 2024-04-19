import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import './styles.css';
import { IChats } from "./interfaces";
import { useTranslation } from "@utilities/hooks";
import { Icon, Input, Paragraph, Section, Title } from "@components";
import { EnumIconName } from "@utilities/enums";
import { formatDate, formatTime } from "@utilities/functions";

export const ChatsComponent:React.FC<IChats> = ({
    messages,
    onSendMessage
})=> {

    const translate = useTranslation();
    const messagesEndRef = useRef<any>();
    const [message, setMessage] = useState<string>('');
    const [search, setSearch] = useState<string>('');
    const [selectedUser, setSelectedUser] = useState<{name: string, isOnline: boolean}>();

    const usersList = useMemo(()=> {
        return [
            {
                name: 'Jeanne Doe',
                isOnline: true
            },
            {
                name: 'Dominique Doe',
                isOnline: false
            },
        ]
    }, []);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    const handleSendMessage = useCallback(()=> {
        if(message){
            onSendMessage(message);
            setMessage('');
        }
    }, [message, onSendMessage]);

    useEffect(() => {
        if(messages.length > 0){
            scrollToBottom();
        }
    }, [messages, scrollToBottom]);

    const renderRightSection = useCallback(()=> {
        if(!selectedUser) {
            return (
                <Paragraph 
                    label="Selectionnez une conversation"
                />
            )
        };

        return (
            <Section className="ad_chats_rightSection">
                <div className="ad_chats_rightSection_chat_header">
                    <Title 
                        label={selectedUser?.name}
                        variant='h_sm'
                        weight='regular'
                    />
                    <Paragraph 
                        label={selectedUser.isOnline ? 'en ligne' : 'hors ligne'}
                        variant='p_sm'
                        className={selectedUser.isOnline ? "ad_chats_rightSection_chat_header_txt_online" : "ad_chats_rightSection_chat_header_txt_offline"}
                    />
                </div>

                <div className="ad_chats_rightSection_chat_container">   
                    {
                        messages.map((mess, i)=> {

                            const dateAndHoure = `${formatTime(mess.date)} le ${formatDate(mess.date)}`
                            const isSender = mess.senderID === 'userID';

                            return (
                                <div
                                    key={i}
                                    className={
                                        isSender 
                                        ? 'ad_chats_rightSection_chat_item_sender_container'
                                        : 'ad_chats_rightSection_chat_item_receiver_container'
                                    }
                                >
                                    <Paragraph 
                                        label={mess.message}
                                        variant='p_xl'
                                        className={`ad_chats_rightSection_chat_item_centent ${isSender && 'ad_sender_chat'}`}
                                    />
                                    
                                    <Paragraph 
                                        label={dateAndHoure}
                                        variant='p_sm'
                                        className={`ad_chats_rightSection_chat_item_date ${isSender && 'ad_sender_date'}`}
                                    />
                                </div>
                            )
                        })
                    }
                    <div ref={messagesEndRef} />
                </div>

                <div className="ad_chats_rightSection_chat_input_container">
                    <Input 
                        placeholder="message..."
                        value={message}
                        onChange={setMessage}
                        width={450}
                    />

                    <Icon 
                        iconName={EnumIconName.send}
                        size={25}
                        colors="#ec4dbc"
                        onIconPress={handleSendMessage}
                    />
                </div>
            </Section>
        )
    }, [handleSendMessage, message, messages, selectedUser]);

    return (
        <div className="ad_chats_container">
            <Section className="ad_chats_leftSection">
                <div className="ad_chats_leftSection_subContainer">
                    <div className="ad_chats_leftSection_subContainer_avatar">
                        <Icon 
                            iconName={EnumIconName.user}
                            colors="#fff"
                            size={50}
                        />
                    </div>
                    <Title 
                        label="John Doe"
                        variant='h_sm'
                        weight='light'
                    />
                </div>

                <div className="ad_chats_leftSection_subContainer ad_chats_leftSection_subContainer_topDivider">
                    <Input 
                        placeholder="Recherche"
                        value={search}
                        onChange={setSearch}
                    />

                    <div className="ad_chats_leftSection_userList_container">
                    {
                        usersList.map((userItem, i)=> {
                            return (
                                <div
                                    key={i}
                                    className="ad_ad_chats_leftSection_userItem_container"
                                    onClick={()=> setSelectedUser(userItem)}
                                >
                                    <Paragraph 
                                        label={userItem.name}
                                    />

                                    <Icon 
                                        iconName={EnumIconName.arrowRightLong}
                                        colors="#fff"
                                    />
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </Section>

            {renderRightSection()}
        </div>
    )
}
