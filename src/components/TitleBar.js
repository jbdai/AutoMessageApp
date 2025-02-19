import React, { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBell } from "react-icons/fa";
import { db, collection, query, where, getDocs } from "../firebase"; // Fix Firebase import

function TitleBar() {
    const [darkMode, setDarkMode] = useState(false);
    const [unreadMessages, setUnreadMessages] = useState(false);

    useEffect(() => {
        async function fetchUnreadMessages() {
            try {
                const messagesQuery = query(collection(db, "messages"), where("status", "==", "unread"));
                const snapshot = await getDocs(messagesQuery);
                setUnreadMessages(snapshot.docs.length > 0);
            } catch (error) {
                console.error("Error fetching unread messages:", error);
            }
        }

        fetchUnreadMessages();
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode", !darkMode);
    };

    return (
        <header className="title-bar">
            <h1>✨ AutoMessageApp 🚀</h1>
            <div className="title-icons">
                <button className="notification-icon">
                    <FaBell />
                    {unreadMessages && <span className="notification-badge"></span>}
                </button>
                <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </header>
    );
}

export default TitleBar;
