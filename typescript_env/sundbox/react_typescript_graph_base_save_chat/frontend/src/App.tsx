import React, { useState } from "react";
import { ForceGraph2D } from "react-force-graph";
import "./App.css";

interface Message {
  text: string;
  isBot: boolean;
}

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [view, setView] = useState<"chat" | "graph">("chat");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendMessage();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.ctrlKey && event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = async () => {
    const message = input.trim();
    if (!message) return;

    setMessages((prev) => [...prev, { text: message, isBot: false }]);
    setInput("");

    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      const data = (await response.json()) as { message: string };
      setMessages((prev) => [...prev, { text: data.message, isBot: true }]);
    } else {
      setMessages((prev) => [
        ...prev,
        { text: "Failed to get response from the server.", isBot: true },
      ]);
    }
  };

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => setView("chat")}>Chat</button>
        <button onClick={() => setView("graph")}>Graph</button>
      </div>
      <div className="content-box">
        {view === "chat" ? (
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${
                  msg.isBot ? "bot-message" : "user-message"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        ) : (
          <div className="graph-box">
            <ForceGraph2D
              graphData={{
                nodes: messages.map((msg, idx) => ({
                  id: idx,
                  name: msg.text,
                  //   color: msg.isBot ? "red" : "blue",
                  color: msg.isBot ? "#0056b3" : "#919191",
                })),
                links: messages
                  .slice(1)
                  .map((_, idx) => ({ source: idx, target: idx + 1 })),
              }}
              nodeCanvasObject={(node, ctx, globalScale) => {
                const label = node.name;
                const fontSize = 12 / globalScale;
                ctx.fillStyle = node.color;
                ctx.font = `${fontSize}px Sans-Serif`;
                if (typeof node.x === "number" && typeof node.y === "number") {
                  ctx.beginPath();
                  ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
                  ctx.fill();
                  ctx.fillText(label, node.x + 8, node.y + 3);
                }
              }}
              nodeAutoColorBy="color"
            />
          </div>
        )}
      </div>
      <div className="form-container">
        <form className="form-area" onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            rows={3}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default App;
