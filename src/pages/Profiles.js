import React, { useContext, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";

export default function Profiles() {
    const { profiles, setProfiles } = useContext(ProfileContext);
    const [newProfile, setNewProfile] = useState("");

    const addProfile = () => {
        if (newProfile.trim() !== "") {
            setProfiles([...profiles, newProfile.trim()]);
            setNewProfile("");
        }
    };

    const deleteProfile = (profile) => {
        setProfiles(profiles.filter((p) => p !== profile));
    };

    return (
        <div className="profile-management">
            <h2>Profile Management</h2>
            <div className="profile-list">
                {profiles.map((profile, index) => (
                    <div key={index} className="profile-item">
                        <span>{profile}</span>
                        <button onClick={() => deleteProfile(profile)}>🗑 Delete</button>
                    </div>
                ))}
            </div>
            <div className="profile-add">
                <input
                    type="text"
                    placeholder="New Profile Name"
                    value={newProfile}
                    onChange={(e) => setNewProfile(e.target.value)}
                />
                <button onClick={addProfile}>➕ Add Profile</button>
            </div>
        </div>
    );
}
