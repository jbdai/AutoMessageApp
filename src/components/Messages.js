import React from "react";

function Messages() {
    const messagesByUID = {
        "UID-123456": ["Hello!", "How are you?"],
        "UID-789012": ["Meeting at 5 PM", "Let's catch up!"]
    };

    return (
        <div className="card messages-box">
            <h2>📥 Messages</h2>
            {Object.keys(messagesByUID).map((uid) => (
                <div key={uid} className="message-uid" onClick={() => alert(`Showing messages for ${uid}`)}>
                    <strong>{uid}</strong>
                </div>
            ))}
        </div>
    );
}

export default Messages;
