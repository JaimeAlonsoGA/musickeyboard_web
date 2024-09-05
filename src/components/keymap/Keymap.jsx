import { keymapLeft, keymapRight, usedKeys, usedKeysLeft, usedKeysRight } from "../../assets/keymaps";
import { usePropsProvider } from "../../providers/PropsProvider";
import { useSoundProvider } from "../../providers/SoundProvider";
import PressedNotes from "../pressed-notes/PressedNotes";

const Keymap = () => {
    const { showNoteName } = usePropsProvider();
    return (
        <div className="flex flex-row justify-center grid grid-cols-3 items-center">
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
    const { octaveLeft, octaveRight, sounding } = useSoundProvider();
    return (
        <div className={`p-1 bg-gray-400 border-2 border-gray-800 rounded-md text-base ${keyboard.used ? "" : "invisible"}
        ${sounding.includes((keymapLeft[keyboard.key] + octaveLeft) || keymapRight[keyboard.key] + octaveRight) ? "" : "shadow-xl"}`}>
            <div className={`flex items-center justify-center w-4 h-4 p-4 bg-gray-100 rounded-md 
            ${sounding.includes((keymapLeft[keyboard.key] + octaveLeft) || keymapRight[keyboard.key] + octaveRight) ? "bg-gray-400" : "bg-gray-100"}`}
            >
                {keyboard.key.toUpperCase()}
            </div>
        </div>
    );
}

export default Keymap;