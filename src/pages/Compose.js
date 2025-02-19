import React, { useContext, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";

export default function Compose() {
    const profileContext = useContext(ProfileContext);
    
    // Ensure profiles always have a default value
    const profiles = profileContext?.profiles || ["Personal", "Professional", "Marketing"];
    
    // Hooks must always be called unconditionally
    const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
    const [message, setMessage] = useState("");

    const generateMessage = () => {
        setMessage(`AI-generated message based on ${selectedProfile} profile.`);
    };

    return (
        <div className="compose-page">
            <h2>AI Messaging</h2>
            <div className="profile-selector">
                <label>Select Profile:</label>
                <select value={selectedProfile} onChange={(e) => setSelectedProfile(e.target.value)}>
                    {profiles.map((profile, index) => (
                        <option key={index} value={profile}>{profile}</option> // ✅ Closing tag fixed
                    ))}
                </select>
            </div>
            <div className="message-box">
                <textarea value={message} readOnly placeholder="AI-generated message will appear here..." />
            </div>
            <button onClick={generateMessage}>✨ Generate AI Message</button>
        </div>
    );
}
