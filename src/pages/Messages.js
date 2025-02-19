import React, { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

export default function Messages() {
    const messageContext = useContext(MessageContext);
    
    // Ensure messages are not undefined
    const messages = messageContext?.messages || [];

    return (
        <div className="messages-page">
            <h2>📥 Messages</h2>
            <ul>
                {messages.length > 0 ? (
                    messages.map((msg, index) => <li key={index}>{msg}</li>)
                ) : (
                    <p>No messages available</p>
                )}
            </ul>
        </div>
    );
}
