import { useState, useContext, createContext } from "react";

const DarkModeContext = createContext(null);

export const DarkModeProvider = ({ children }) => {
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return(
        <DarkModeContext.Provider value={{isDarkMode, handleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkModeContext = () => useContext(DarkModeContext);