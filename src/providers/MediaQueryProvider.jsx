import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const MediaQueryContext = createContext();

export const useMediaQueryProvider = () => {
    const c = useContext
        (MediaQueryContext);
    return c;
}

export const MediaQueryContextProvider = ({ children }) => {
    const isSmScreen = useMediaQuery({ query: '(min-width: 640px)' });
    const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });
    const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' });
    const isXlScreen = useMediaQuery({ query: '(min-width: 1280px)' });
    const is2xlScreen = useMediaQuery({ query: '(min-width: 1536px)' });
    return (
        <MediaQueryContext.Provider value={{ isSmScreen, isMdScreen, isLgScreen, isXlScreen, is2xlScreen }}>
            {children}
        </MediaQueryContext.Provider>
    );
}

export default MediaQueryContext;