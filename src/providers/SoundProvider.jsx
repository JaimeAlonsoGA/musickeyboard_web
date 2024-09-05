import { createContext, useContext, useEffect, useState } from "react";
import { keymapLeft, keymapRight } from "../assets/keymaps";

const SoundContext = createContext();

export const useSoundProvider = () => {
    const c = useContext
        (SoundContext);
    return c;
}

export const SoundContextProvider = ({ children }) => {
    const [sounding, setSounding] = useState([]);
    const [octaveLeft, setOctaveLeft] = useState(4);
    const [octaveRight, setOctaveRight] = useState(5);
    const [octavesLocked, setOctavesLocked] = useState(true);

    useEffect(() => { console.log("octave left: " + octaveLeft) }, [octaveRight]);

    const handleKeyDown = (event) => {
        if (!event.repeat && keymapLeft[event.key]) {
            const noteLeft = keymapLeft[event.key] + octaveLeft;
            playNote(noteLeft)
            console.log("note octave left: " + noteLeft);
        }
        if (!event.repeat && keymapRight[event.key]) {
            const noteRight = keymapRight[event.key] + octaveRight;
            playNote(noteRight)
        }
    };

    const handleKeyUp = (event) => {
        if (keymapLeft[event.key])
            removeNote(keymapLeft[event.key] + octaveLeft)
        if (keymapRight[event.key])
            removeNote(keymapRight[event.key] + octaveRight)
    };

    const playNote = (name) => { if (name) setSounding(sounding => [...sounding, name]) }

    const removeNote = (name) => setSounding(sounding => sounding.filter(s => s != name))

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [octaveLeft, octaveRight]);

    return (
        <SoundContext.Provider value={{ playNote, removeNote, sounding, octaveLeft, octaveRight, setOctaveRight, setOctaveLeft, octavesLocked, setOctavesLocked }}>
            {children}
        </SoundContext.Provider>
    );
};

export default SoundContext;