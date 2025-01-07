import React, { createContext, useState, useContext, useEffect } from "react";

const TemaContext = createContext();

export const TemaContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTema = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        document.body.className = isDarkMode ? "dark-mode" : "light-mode";
    }, [isDarkMode]);

    return (
        <TemaContext.Provider value={{ isDarkMode, toggleTema }}>
            {children}
        </TemaContext.Provider>
    );
};

export const useTema = () => {
    return useContext(TemaContext);
};
