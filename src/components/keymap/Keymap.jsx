import { useEffect, useState } from "react";
import { keymapLeft, keymapRight, usedKeys, usedKeysLeft, usedKeysRight } from "../../assets/keymaps";
import { usePropsProvider } from "../../providers/PropsProvider";
import { useSoundProvider } from "../../providers/SoundProvider";
import PressedNotes from "../pressed-notes/PressedNotes";

const Keymap = () => {
    const { showNoteName } = usePropsProvider();
    return (
        <div className="flex flex-row justify-center grid grid-cols-3 items-center font-medium">
            <KeyMap keymap={usedKeysLeft} />
            <div>
                {showNoteName && <PressedNotes />}
            </div>
            <KeyMap keymap={usedKeysRight} />
        </div>
    );
}

const KeyMap = ({ keymap }) => {

    return (
        <div>
            <div className="flex flex-row">
                {keymap.black.map((keyboard, i) => (
                    <KeyMapKey key={i} keyboard={keyboard} />
                ))}
            </div>
            <div className="flex flex-row ml-6">
                {keymap.white.map((keyboard, i) => (
                    <KeyMapKey key={i} keyboard={keyboard} />
                ))}
            </div>
        </div>
    )
}

const KeyMapKey = ({ keyboard }) => {
    const { sounding, octaveLeft, octaveRight } = useSoundProvider();
    const [isPressed, setIsPressed] = useState(false);
    const key = keyboard.key;
    const noteLeft = keymapLeft[key];
    const noteRight = keymapRight[key];
    const keysToIncreaseOctave = ['i', 'o', 'p', '9', '0', 'm', ',', '.', 'k', 'l'];
    const KeyMapNoteLeft = keysToIncreaseOctave.includes(key) ? noteLeft + (octaveLeft + 1) : noteLeft + octaveLeft;
    const KeyMapNoteRight = keysToIncreaseOctave.includes(key) ? noteRight + (octaveRight + 1) : noteRight + octaveRight;

    let noteNameSharp = KeyMapNoteLeft || KeyMapNoteRight;
    let noteName = '';
    if (noteNameSharp) {
        const digitRegex = /\d+/;
        const letterRegex = /[a-zA-Z]+/g;
        noteName = noteNameSharp.replace(digitRegex, "").replace("sharp", "♯");
    }

    useEffect(() => {
        sounding.includes(KeyMapNoteLeft) || sounding.includes(KeyMapNoteRight) ? setIsPressed(true) : setIsPressed(false);
    }, [sounding]);

    return (
        <div className={`p-1 border border-gray-300 rounded-xl text-base ${keyboard.used ? "" : "bg-rose-600 opacity-10"}
        ${isPressed ? "" : "shadow-xl"}
        ${noteName.includes("#") ? "bg-gray-400" : "bg-gray-400"}`}>
            <div className={`flex flex-col items-center justify-center w-4 h-4 p-4 bg-gray-100 rounded-xl
            ${isPressed ? "bg-gray-400" : "bg-gray-100"}
            `}>
                {keyboard.key.toUpperCase()}
            </div>
            <div className="text-xs font-normal italic">
                {noteName}
            </div>
        </div>
    );
}

export default Keymap;