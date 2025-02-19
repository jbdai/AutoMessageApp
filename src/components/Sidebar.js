import React from "react";

export default function Sidebar({ setActiveSection }) {
    return (
        <nav className="sidebar">
            <button onClick={() => setActiveSection("compose")}>📝 AI Messaging</button>
            <button onClick={() => setActiveSection("messages")}>📥 Messages</button>
            <button onClick={() => setActiveSection("profiles")}>👤 Profiles</button>
            <button onClick={() => setActiveSection("settings")}>⚙️ Settings</button>
        </nav>
    );
}
