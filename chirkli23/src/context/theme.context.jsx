import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({})

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState( "dark");
    const value = {theme, setTheme};

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('tema', theme);
    },[theme])
    return(
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}