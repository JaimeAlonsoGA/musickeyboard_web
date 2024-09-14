import { createContext, useContext, useState } from "react";
import themes from "../assets/themes";

export const PropsContext = createContext();

export const usePropsProvider = () => {
    const c = useContext(PropsContext);
    return c;
}

export const PropsContextProvider = ({ children }) => {
    const [isNoteNameVisible, setIsNoteNameVisible] = useState(false);
    const [zoom, setZoom] = useState(10);
    const [isKeymapVisible, setIsKeymapVisible] = useState(false);
    const [isMiniKeyboardVisible, setIsMiniKeyboardVisible] = useState(true);
    const [showNoteName, setShowNoteName] = useState(true);
    // const [ isFocusMode, setIsFocusMode ] = useState(false);
    // const [ isDarkMode, setIsDarkMode ] = useState(false);
    const [scrollbarVisible, setScrollbarVisible] = useState(false);
    const [theme, setTheme] = useState(themes[0]);
    const [notation, setNotation] = useState(true);
    const [keymapOnKey, setKeymapOnKey] = useState(true);

    const changeTheme = (themeName) => {
        const selectedTheme = themes.find(t => t.name === themeName);
        if (selectedTheme) {
            setTheme(selectedTheme);
        }
    };

    return (
        <PropsContext.Provider value={{
            isNoteNameVisible, setIsNoteNameVisible, zoom, setZoom,
            isKeymapVisible, setIsKeymapVisible, isMiniKeyboardVisible, setIsMiniKeyboardVisible,
            showNoteName, setShowNoteName, scrollbarVisible, setScrollbarVisible, changeTheme, theme,
            notation, setNotation, keymapOnKey, setKeymapOnKey
        }}>
            {children}
        </PropsContext.Provider>
    );
}