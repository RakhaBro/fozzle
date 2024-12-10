import { createContext, useState } from "react";

export const HealthContext = createContext();

export const HealthProvider = ({ children }) => {
    const [health, setHealth] = useState(100);

    return (
        <HealthContext.Provider value={{ health, setHealth }}>
            {children}
        </HealthContext.Provider>
    );
};