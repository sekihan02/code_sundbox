// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChatComponent } from './components/ChatComponent';

ReactDOM.render(
    <React.StrictMode>
        <ChatComponent />
    </React.StrictMode>,
    document.getElementById('root')
);
