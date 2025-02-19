import React, { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Compose from "./pages/Compose";
import Messages from "./pages/Messages";
import Profiles from "./pages/Profiles";
import Settings from "./pages/Settings";

function App() {
    const [activeSection, setActiveSection] = useState("compose");

    return (
        <div className="app-container">
            <Navbar />
            <Sidebar setActiveSection={setActiveSection} />
            <div className="main-content">
                {activeSection === "compose" && <Compose />}
                {activeSection === "messages" && <Messages />}
                {activeSection === "profiles" && <Profiles />}
                {activeSection === "settings" && <Settings />}
            </div>
        </div>
    );
}

export default App;
