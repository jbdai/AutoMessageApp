import { createContext, useState } from "react";

export const MessageContext = createContext();

export function MessageProvider({ children }) {
    const [messages, setMessages] = useState(["Welcome message", "AI-generated sample message"]);

    return (
        <MessageContext.Provider value={{ messages, setMessages }}>
            {children}
        </MessageContext.Provider>
    );
}
