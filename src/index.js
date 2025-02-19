import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProfileProvider } from "./context/ProfileContext";
import { MessageProvider } from "./context/MessageContext"; // Ensure MessageContext is provided
import "./styles/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ProfileProvider>
            <MessageProvider> {/* Wrap the app with Message Context */}
                <App />
            </MessageProvider>
        </ProfileProvider>
    </React.StrictMode>
);
