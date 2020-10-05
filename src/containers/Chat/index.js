import React from 'react';

import { Chat as StreamioChat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicmVkLWJhbmQtNiJ9.ekF0mALjhw4H0GkqgPBDd6LxqSyxSuBxIFv7rgkDHpM';

chatClient.setUser({
    id: 'red-band-6',
    name: 'Red band',
    image: 'https://getstream.io/random_png/?id=red-band-6&name=Red+band'
}, userToken);

const channel = chatClient.channel('messaging', 'godevs');

const Chat = () => {
    return (
        <div>
            <StreamioChat client={chatClient} theme={'messaging light'}>
                <Channel channel={channel}>
                    <Window>
                        <ChannelHeader/>
                        <MessageList/>
                        <MessageInput/>
                    </Window>
                    <Thread/>
                </Channel>
            </StreamioChat>
        </div>
    )
}

export default Chat;