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

    // useEffect(() => { console.log("octave left: " + octaveLeft) }, [octaveRight]);

    const octaveCorrection = (key, octave, keymap) => {
        const keysToIncreaseOctave = ['i', 'o', 'p', '9', '0', 'm', ',', '.', 'k', 'l'];
        if (keysToIncreaseOctave.includes(key)) {
            const newOctave = octave + 1;
            console.log(keymap[key] + newOctave);
            return keymap[key] + newOctave;
        } else {
            console.log(keymap[key] + octave);
            return keymap[key] + octave;
        }
    }

    const handleKeyDown = (event) => {
        if (!event.repeat && keymapLeft[event.key]) {
            const noteLeft = octaveCorrection(event.key, octaveLeft, keymapLeft);
            playNote(noteLeft)
        }
        if (!event.repeat && keymapRight[event.key]) {
            const noteRight = octaveCorrection(event.key, octaveRight, keymapRight);
            playNote(noteRight)
        }
    };

    const handleKeyUp = (event) => {
        if (keymapLeft[event.key]) {
            const noteLeft = octaveCorrection(event.key, octaveLeft, keymapLeft);
            removeNote(noteLeft)
        }
        if (keymapRight[event.key]) {
            const noteRight = octaveCorrection(event.key, octaveRight, keymapRight);
            removeNote(noteRight)
        }
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