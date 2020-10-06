import React from 'react';

import { Chat as StreamioChat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput, MessageLivestream, MessageInputSmall } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat(process.env.REACT_APP_CHAT_TOKEN);
const userToken = process.env.REACT_APP_USER_TOKEN;

chatClient.setUser({
    id: 'tinama',
    name: 'Tatiana Inama',
    image: 'https://getstream.io/random_svg/?name=tinama'
}, userToken);

const channel = chatClient.channel('admissions', 'northwestern-memorial-hospital', {
    name: 'Admissions update chat',
    image: '',
    members: ['tinama']
});

const Chat = () => {
    return (
        <div>
            <StreamioChat client={chatClient} theme={'livestream light'}>
                <Channel channel={channel} Message={MessageLivestream}>
                    <Window hideOnThread>
                        <ChannelHeader live/>
                        <MessageList/>
                        <MessageInput Input={MessageInputSmall} focus/>
                    </Window>
                    <Thread fullWidth/>
                </Channel>
            </StreamioChat>
        </div>
    )
}

export default Chat;