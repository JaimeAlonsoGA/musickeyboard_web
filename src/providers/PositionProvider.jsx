import { createContext, useContext, useEffect, useRef, useState } from "react";
import notes from "../assets/notes";

const PositionContext = createContext();

export const usePositionProvider = () => {
    const c = useContext
        (PositionContext);
    return c;
}

export const PositionContextProvider = ({ children }) => {
    const [visibleNotes, setVisibleNotes] = useState({ first: 23, last: null });
    const notesRef = useRef([]);
    const keyboardRef = useRef(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true);

    const updateVisibleNotes = () => {
        const visiblesTemp = {
            first: null,
            last: null
        }
        notesRef.current.forEach((note, i) => {
            const rect = note.getBoundingClientRect();
            if (rect.left >= 0 && rect.right <= window.innerWidth) {
                if (!visiblesTemp.first) {
                    visiblesTemp.first = i - 1;
                }
                else {
                    visiblesTemp.last = i + 1;
                }
            }
        });

        console.log(visiblesTemp);

        setVisibleNotes(visiblesTemp);
    }

    const scrollToKey = (noteId) => {
        const keyIndex = notes.findIndex(note => note.id === noteId);
        if (keyIndex !== -1 && notesRef.current[keyIndex]) {
            notesRef.current[keyIndex].scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    const AutoScroll = (noteId) => {
        const keyIndex = notes.findIndex(note => note.id === noteId);
        if (keyIndex !== -1 && notesRef.current[keyIndex]) {
            notesRef.current[keyIndex].scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    useEffect(() => {
        console.log("visible notes: ", visibleNotes);
    }, [visibleNotes]);

    useEffect(() => {
        keyboardRef.current.addEventListener('scroll', updateVisibleNotes);
        window.addEventListener('resize', updateVisibleNotes);

        AutoScroll("C5");
        updateVisibleNotes();

        return () => {
            window.removeEventListener('scroll', updateVisibleNotes);
            window.removeEventListener('resize', updateVisibleNotes);
        };
    }, []);

    return (
        <PositionContext.Provider value={{ visibleNotes, notesRef, keyboardRef, updateVisibleNotes, scrollToKey, AutoScroll, isAutoScroll, setIsAutoScroll }}>
            {children}
        </PositionContext.Provider>
    );
}

export default PositionContext;