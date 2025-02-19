import { createContext, useState } from "react";

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
    const [profiles, setProfiles] = useState(["Personal", "Professional", "Marketing"]);

    return (
        <ProfileContext.Provider value={{ profiles, setProfiles }}>
            {children}
        </ProfileContext.Provider>
    );
}
