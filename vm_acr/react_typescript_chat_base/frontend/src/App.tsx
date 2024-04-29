import React, { useState } from 'react';

interface Message {
    text: string;
    isBot: boolean;
}

const App: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await sendMessage();
    };

    const sendMessage = async () => {
        const message = input.trim();
        if (!message) return;

        setMessages(prev => [...prev, { text: message, isBot: false }]);
        setInput('');

        const response = await fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });

        if (response.ok) {
            const data = await response.json() as { message: string };
            setMessages(prev => [...prev, { text: data.message, isBot: true }]);
        } else {
            setMessages(prev => [...prev, { text: "Failed to get response from the server.", isBot: true }]);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.ctrlKey && event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.isBot ? 'bot-message' : 'user-message'}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chat-form">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Say something..."
                    rows={3}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default App;
