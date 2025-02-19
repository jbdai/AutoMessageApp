import React from "react";

export default function Settings() {
    return (
        <div className="settings-page">
            <h2>⚙️ Settings</h2>
            <div className="settings-options">
                <label>
                    <input type="checkbox" /> Enable Dark Mode
                </label>
                <label>
                    <input type="checkbox" /> Enable Notifications
                </label>
            </div>
        </div>
    );
}
