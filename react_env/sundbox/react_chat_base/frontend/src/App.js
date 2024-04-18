import React, { useState } from 'react';

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sendMessage();
    };

    const sendMessage = async () => {
        const message = input.trim();
        if (!message) return;

        // ユーザーメッセージを先に追加
        setMessages(prev => [...prev, { text: message, isBot: false }]);
        setInput('');

        const response = await fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });

        if (response.ok) {
            const data = await response.json();
            // バックエンドからの返信を追加
            setMessages(prev => [...prev, { text: data.message, isBot: true }]);
        } else {
            // エラー処理: 応答が失敗した場合
            setMessages(prev => [...prev, { text: "Failed to get response from the server.", isBot: true }]);
        }
    };

    const handleKeyDown = (event) => {
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
                    rows="3"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default App;
