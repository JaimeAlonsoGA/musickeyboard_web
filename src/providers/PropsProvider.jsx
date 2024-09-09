import { createContext, useContext, useState } from "react";

export const PropsContext = createContext();

export const usePropsProvider = () => {
    const c = useContext(PropsContext);
    return c;
}

export const PropsContextProvider = ({ children }) => {
    const [isNoteNameVisible, setIsNoteNameVisible] = useState(false);
    const [zoom, setZoom] = useState(15);
    const [isKeymapVisible, setIsKeymapVisible] = useState(true);
    const [isMiniKeyboardVisible, setIsMiniKeyboardVisible] = useState(true);
    const [showNoteName, setShowNoteName] = useState(true);
    // const [ isFocusMode, setIsFocusMode ] = useState(false);
    // const [ isDarkMode, setIsDarkMode ] = useState(false);

    return (
        <PropsContext.Provider value={{ isNoteNameVisible, setIsNoteNameVisible, zoom, setZoom, isKeymapVisible, setIsKeymapVisible, isMiniKeyboardVisible, setIsMiniKeyboardVisible, showNoteName, setShowNoteName }}>
            {children}
        </PropsContext.Provider>
    );
}