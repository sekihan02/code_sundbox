// ChatComponent.tsx
import React, { useState, useEffect } from 'react';

interface Message {
    user: string;
    content: string;
}

export const ChatComponent: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/messages')
            .then((response) => response.json())
            .then((data) => setMessages(data));
    }, []);

    const sendMessage = () => {
        fetch('http://localhost:5000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: 'User', content: newMessage }),
        })
            .then((response) => response.json())
            .then((message) => {
                setMessages([...messages, message]);
                setNewMessage('');
            });
    };

    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <p key={index}>
                        {message.user}: {message.content}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};
