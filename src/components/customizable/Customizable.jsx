import { useMediaQueryProvider } from "../../providers/MediaQueryProvider";
import { usePropsProvider } from "../../providers/PropsProvider";
import Switch from "./NoteNameSwitch";

const Customizable = () => {
    const { isNoteNameVisible, setIsNoteNameVisible, isKeymapVisible, setIsKeymapVisible, setIsMiniKeyboardVisible, isMiniKeyboardVisible, setShowNoteName, showNoteName } = usePropsProvider();
    const { isLgScreen } = useMediaQueryProvider();
    return (
        <div className="bg-gray-200 mt-2 py-2 w-full flex flex-col gap-8 lg:flex-row items-center justify-between rounded-2xl">
            <Switch text="All Notes" setter={setIsNoteNameVisible} state={isNoteNameVisible} />
            <Switch text="Notes and Chords" setter={setShowNoteName} state={showNoteName} />
            {isLgScreen && <Switch text="Key Mapping" setter={setIsKeymapVisible} state={isKeymapVisible} />}
            <Switch text="Keyboard Position" setter={setIsMiniKeyboardVisible} state={isMiniKeyboardVisible} />
        </div>
    );
}

export default Customizable;