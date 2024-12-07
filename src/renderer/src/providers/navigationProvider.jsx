import { createContext, useState } from "react";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [activePage, setActivePage] = useState("");

    return (
        <NavigationContext.Provider value={{ activePage, setActivePage }}>
            {children}
        </NavigationContext.Provider>
    );
};