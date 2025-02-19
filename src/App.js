import React, { useState } from "react";
import "./App.css";
import TitleBar from "./components/TitleBar";
import ComposeBox from "./components/ComposeBox";
import MessageBox from "./components/MessageBox";
import SendToUniqueID from "./components/SendToUniqueID";
import Messages from "./components/Messages";
import Settings from "./components/Settings";

function App() {
    const [activeSection, setActiveSection] = useState("compose");
    const [composeData, setComposeData] = useState({
        recipient: "",
        sender: "",
        keywords: "",
        relationship: "",
        theme: "",
        tone: "",
        wordCount: 50,
        language: "",
    });
    const [generatedMessage, setGeneratedMessage] = useState("");

    return (
        <div className="app-container">
            <TitleBar />

            <div className="app-box">
                <div className="nav-buttons">
                    <button onClick={() => setActiveSection("compose")}>📝 Compose</button>
                    <button onClick={() => setActiveSection("send")}>📩 Send to Unique ID</button>
                    <button onClick={() => setActiveSection("messages")}>📥 Messages</button>
                    <button onClick={() => setActiveSection("settings")}>⚙️ Settings</button>
                </div>

                <div className="main-content">
                    {activeSection === "compose" && (
                        <ComposeBox 
                            setActiveSection={setActiveSection}
                            composeData={composeData}
                            setComposeData={setComposeData}
                            setGeneratedMessage={setGeneratedMessage}
                        />
                    )}
                    {activeSection === "message" && <MessageBox generatedMessage={generatedMessage} />}
                    {activeSection === "send" && <SendToUniqueID />}
                    {activeSection === "messages" && <Messages />}
                    {activeSection === "settings" && <Settings />}
                </div>
            </div>
        </div>
    );
}

export default App;
