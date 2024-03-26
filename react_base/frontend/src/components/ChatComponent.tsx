import React, { useState } from 'react';

const ChatComponent: React.FC = () => {
    const [message, setMessage] = useState("");

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Submitted message: ${message}`);
        setMessage("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={message} onChange={handleMessageChange} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatComponent;
