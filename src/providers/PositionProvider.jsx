import { createContext, useContext, useEffect, useRef, useState } from "react";

const PositionContext = createContext();

export const usePositionProvider = () => {
    const c = useContext
        (PositionContext);
    return c;
}

export const PositionContextProvider = ({ children }) => {
    const [visibleNotes, setVisibleNotes] = useState({ first: null, last: null });
    const notesRef = useRef([]);
    const keyboardRef = useRef(null);

    const updateVisibleNotes = () => {
        const visiblesTemp = {
            first: null,
            last: null
        }
        notesRef.current.forEach((note, i) => {
            const rect = note.getBoundingClientRect();
            if (rect.left >= 0 && rect.right <= window.innerWidth) {
                if (!visiblesTemp.first) {
                    visiblesTemp.first = i -1;
                }
                else {
                    visiblesTemp.last = i + 1;
                }
            }
        });

        console.log(visiblesTemp);

        setVisibleNotes(visiblesTemp);
    }
    

    useEffect(() => {
        console.log("visible notes: ", visibleNotes);
    }, [visibleNotes]);

    useEffect(() => {
        keyboardRef.current.addEventListener('scroll', updateVisibleNotes);
        window.addEventListener('resize', updateVisibleNotes);

        updateVisibleNotes(); // Initial check

        return () => {
            window.removeEventListener('scroll', updateVisibleNotes);
            window.removeEventListener('resize', updateVisibleNotes);
        };
    }, []);

    return (
        <PositionContext.Provider value={{ visibleNotes, notesRef, keyboardRef, updateVisibleNotes }}>
            {children}
        </PositionContext.Provider>
    );
}

export default PositionContext;