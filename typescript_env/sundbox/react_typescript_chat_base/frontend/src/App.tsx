import React, { useState } from 'react';
import { ForceGraph2D } from 'react-force-graph';

interface Message {
    text: string;
    isBot: boolean;
}

const App: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [view, setView] = useState<'chat' | 'graph'>('chat');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await sendMessage();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.ctrlKey && event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
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

    return (
        <div>
            <button onClick={() => setView('chat')}>Chat</button>
            <button onClick={() => setView('graph')}>Graph</button>
            {view === 'chat' ? (
                <div className="chat-box">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.isBot ? 'bot-message' : 'user-message'}`}>
                            {msg.text}
                        </div>
                    ))}
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your message here..."
                            rows={3}
                            style={{ width: '100%' }}
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            ) : (
                <ForceGraph2D
                    graphData={{ nodes: messages.map((msg, idx) => ({ id: idx, name: msg.text, color: msg.isBot ? 'red' : 'blue' })),
                                 links: messages.slice(1).map((_, idx) => ({ source: idx, target: idx + 1 })) }}
                    nodeAutoColorBy="color"
                    nodeCanvasObject={(node, ctx, globalScale) => {
                        const label = node.name;
                        const fontSize = 12 / globalScale;
                        ctx.fillStyle = node.color;
                        ctx.font = `${fontSize}px Sans-Serif`;
                        if (typeof node.x === 'number' && typeof node.y === 'number') {
                            ctx.fillText(label, node.x, node.y);
                        }
                    }}
                />
            )}
        </div>
    );
};

export default App;
