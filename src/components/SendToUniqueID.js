import React, { useState } from "react";

function SendToUniqueID({ currentMessage }) {
    const [recipientUID, setRecipientUID] = useState("");

    return (
        <div className="card">
            <h3>📩 Send to Unique ID</h3>
            <input type="text" value={recipientUID} onChange={(e) => setRecipientUID(e.target.value)} placeholder="Enter Unique ID" />
            <button>📩 Send</button>
            <p>Current Message: {currentMessage}</p>
        </div>
    );
}

export default SendToUniqueID;
