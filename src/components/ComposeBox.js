import React, { useState } from "react";

function ComposeBox({ setActiveSection, composeData, setComposeData, setGeneratedMessage }) {
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setComposeData({
            ...composeData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCompose = async () => {
        setLoading(true);

        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-4",
                    messages: [
                        {
                            role: "user",
                            content: `Generate a message in ${composeData.language || "English"} with a ${composeData.theme || "neutral"} theme and ${composeData.tone || "standard"} tone. 
                            Word limit: ${composeData.wordCount || 100}. 
                            Recipient: ${composeData.recipient || "someone"}, Sender: ${composeData.sender || "someone"}, Relationship: ${composeData.relationship || "undefined"}, 
                            Keywords: ${composeData.keywords || "none"}.`
                        }
                    ],
                }),
            });

            const data = await response.json();
            setLoading(false);

            if (data.choices && data.choices.length > 0) {
                setGeneratedMessage(data.choices[0].message.content);
                setActiveSection("message");
            } else {
                setGeneratedMessage("⚠️ Error generating message. Please try again.");
            }
        } catch (error) {
            setLoading(false);
            setGeneratedMessage("⚠️ Network error. Please check your internet connection.");
        }
    };

    return (
        <div className="card compose-box">
            <div className="input-group">
                <div className="input-row">
                    <label>Recipient (To)</label>
                    <input type="text" name="recipient" placeholder="John Doe" value={composeData.recipient || ""} onChange={handleInputChange} />
                    <label>Sender (From)</label>
                    <input type="text" name="sender" placeholder="Jane Smith" value={composeData.sender || ""} onChange={handleInputChange} />
                </div>

                <label>Keywords</label>
                <input type="text" name="keywords" placeholder="birthday, celebration, happy" value={composeData.keywords || ""} onChange={handleInputChange} />

                <div className="input-row">
                    <label>Theme</label>
                    <input type="text" name="theme" placeholder="Birthday" value={composeData.theme || ""} onChange={handleInputChange} />
                    <label>Tone</label>
                    <input type="text" name="tone" placeholder="Casual" value={composeData.tone || ""} onChange={handleInputChange} />
                </div>

                <div className="input-row">
                    <label>Relationship</label>
                    <input type="text" name="relationship" placeholder="Friend" value={composeData.relationship || ""} onChange={handleInputChange} />
                    <label>Language</label>
                    <input type="text" name="language" placeholder="English" value={composeData.language || ""} onChange={handleInputChange} />
                </div>

                <button onClick={handleCompose} disabled={loading}>
                    {loading ? "✨ Generating..." : "📝 Compose"}
                </button>
            </div>
        </div>
    );
}

export default ComposeBox;
