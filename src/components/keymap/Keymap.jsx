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
                    <KeyMapKey key={i} keyboard={keyboard} octave="left" />
                ))}
            </div>
            <div className="flex flex-row ml-6">
                {keymap.white.map((keyboard, i) => (
                    <KeyMapKey key={i} keyboard={keyboard} octave="right" />
                ))}
            </div>
        </div>
    )
}

const KeyMapKey = ({ keyboard, octave }) => {
    const { sounding, noteRefinery } = useSoundProvider();
    const [isPressed, setIsPressed] = useState(false);
    const key = keyboard.key;

    const note = noteRefinery(key, octave);

    let noteRefined;
    if (note) {
        noteRefined = note.replace(/\d+/g, "").replace("sharp", "#");
    } else {
        console.error(`Note for key ${key} and octave ${octave} is null or undefined`);
        noteRefined = "";
    }

    useEffect(() => {
        sounding.includes(note) ? setIsPressed(true) : setIsPressed(false);
    }, [sounding]);

    return (
        <div className={`p-1 border border-gray-300 rounded-xl text-base ${keyboard.used ? "" : "bg-rose-600 opacity-10"}
        ${isPressed ? "" : "shadow-xl"}
        `}>
            <div className={`flex flex-col items-center justify-center w-4 h-4 p-4 bg-gray-100 rounded-xl
            ${isPressed ? "bg-gray-400" : "bg-gray-100"}
            `}>
                {keyboard.key.toUpperCase()}
            </div>
            <div className="text-xs font-normal italic">
                {noteRefined}
            </div>
        </div>
    );
}

export default Keymap;

//        ${note.includes("#") ? "bg-gray-400" : "bg-gray-400"}
