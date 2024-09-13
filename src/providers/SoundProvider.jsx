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
    const [octaveMiddleLeft, setOctaveMiddleLeft] = useState(5)
    const [octaveMiddleRight, setOctaveMiddleRight] = useState(5)
    const [octaveRight, setOctaveRight] = useState(6);
    const [octavesLocked, setOctavesLocked] = useState(true);
    const [keymapKeys, setKeymapKeys] = useState([]);

    useEffect(() => {
        console.log("left" + octaveLeft, "middleL" + octaveMiddleLeft, "middleR" + octaveMiddleRight, "right" + octaveRight
        )
    }, [keymapKeys]);

    const noteRefinery = (key, octave) => {
        const letterRegex = /[a-zA-Z]+/;
        const digitRegex = /\d+/;
        const note = keymapRight[key] || keymapLeft[key];

        if (!note) return null;

        const noteOctave = note.replace(letterRegex, "");
        const noteRefined = note.replace(digitRegex, "");

        if (noteOctave === '1') return noteRefined + octaveLeft;
        if (noteOctave === '2') {
            if (octave === 'left') return noteRefined + octaveMiddleLeft;
            else return noteRefined + octaveMiddleRight;
        }
        if (noteOctave === '3') return noteRefined + octaveRight;

        return null;
    };

    const handleKeyDown = (event) => {
        if (!event.repeat && keymapLeft[event.key]) {
            const noteLeft = noteRefinery(event.key, "left");
            if (noteLeft) playNote(noteLeft);
        }
        if (!event.repeat && keymapRight[event.key]) {
            const noteRight = noteRefinery(event.key, "right");
            if (noteRight) playNote(noteRight);
        }
    };

    const handleKeyUp = (event) => {
        if (keymapLeft[event.key]) {
            const noteLeft = noteRefinery(event.key, octaveLeft, keymapLeft);
            if (noteLeft) removeNote(noteLeft)
        }
        if (keymapRight[event.key]) {
            const noteRight = noteRefinery(event.key, octaveRight, keymapRight);
            if (noteRight) removeNote(noteRight)
        }
    };

    const playNote = (note) => { if (note) setSounding(sounding => [...sounding, note]) };
    const removeNote = (note) => setSounding(sounding => sounding.filter(s => s != note))

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [octaveLeft, octaveRight]);

    return (
        <SoundContext.Provider value={{ playNote, removeNote, sounding, octaveLeft, octaveRight, setOctaveRight, setOctaveLeft, octavesLocked, setOctavesLocked, octaveMiddleLeft, octaveMiddleRight, setOctaveMiddleLeft, setOctaveMiddleRight, noteRefinery, setKeymapKeys, keymapKeys }}>
            {children}
        </SoundContext.Provider>
    );
};

export default SoundContext;