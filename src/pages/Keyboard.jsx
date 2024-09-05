import notes from "../assets/notes";
import Key from "../components/key/Key";
import Keymap from "../components/keymap/Keymap";
import MiniKeyboard from "../components/mini-keyboard/MiniKeyboard";
import PressedNotes from "../components/pressed-notes/PressedNotes";
import { usePositionProvider } from "../providers/PositionProvider";
import { usePropsProvider } from "../providers/PropsProvider";
import Settings from "../components/customizable/Settings";
import { useMediaQueryProvider } from "../providers/MediaQueryProvider";

const Keyboard = () => {
    const { isKeymapVisible, isMiniKeyboardVisible, showNoteName } = usePropsProvider();
    const { isLgScreen } = useMediaQueryProvider();
    return (
        <div className="text-center">
            <div className="flex flex-col mt-10 gap-10">
                <Title />
                <Keys />
            </div>
            <div className="mt-10 flex flex-col gap-2 lg:gap-2 xl:gap-12 items-center">
                <div className={`w-full ${isMiniKeyboardVisible ? "" : "invisible"}`}>
                    <MiniKeyboard />
                </div>
                <div className="w-full flex flex-row justify-center items-center h-24">
                    <div className={`flex justify-center ${isLgScreen ? "" : "hidden"} w-full ${isKeymapVisible ? "" : "hidden"}`}>
                        <Keymap />
                    </div>
                    {((!isKeymapVisible || !isLgScreen) && showNoteName) &&
                        <div className="flex h-24 justify-center items-center">
                            <PressedNotes />
                        </div>}
                </div>
                <Settings />
            </div>
        </div >
    );
}

const Title = () => {
    return (
        <h1 className="text-4xl text-gray-300 font-bold font-spaceage">
            MusicKeyboard.io
        </h1>
    )
}

const Keys = () => {
    const { keyboardRef } = usePositionProvider();
    return (
        <div
            ref={keyboardRef}
            className="w-full h-64 overflow-x-scroll h-1/2 border border-gray-300 hide-scrollbar">
            <div className="w-full h-full flex flex-row justify-between">
                {notes.map((note, i) => (
                    <Key note={note} i={i} key={i} />
                ))}
            </div>
        </div>
    )
}


export default Keyboard;