import { useMediaQueryProvider } from "../../providers/MediaQueryProvider";
import { usePropsProvider } from "../../providers/PropsProvider";
import Switch from "./NoteNameSwitch";

const Customizable = () => {
    const { isNoteNameVisible, setIsNoteNameVisible, isKeymapVisible, setIsKeymapVisible, 
        setIsMiniKeyboardVisible, isMiniKeyboardVisible, setShowNoteName, showNoteName, scrollbarVisible, setScrollbarVisible } = usePropsProvider();
    const { isLgScreen } = useMediaQueryProvider();
    return (
        <div className="flex flex-col w-full bg-gray-200 mt-2 py-2">
            <div className="w-full flex flex-col gap-8 lg:flex-row items-center justify-between">
                <Switch text="Hide Scrollbar" setter={setScrollbarVisible} state={scrollbarVisible} />
                <Switch text="Note Names" setter={setIsNoteNameVisible} state={isNoteNameVisible} />
                <Switch text="Notes and Chords" setter={setShowNoteName} state={showNoteName} />
                {isLgScreen && <Switch text="Key Mapping" setter={setIsKeymapVisible} state={isKeymapVisible} />}
                <Switch text="Keyboard Position" setter={setIsMiniKeyboardVisible} state={isMiniKeyboardVisible} />
            </div>
            {/* <div className="border-t border-gray-500 w-full flex flex-col gap-8 lg:flex-row items-center justify-between pt-2">
                <Switch text="Dark Mode" setter={setShowNoteName} state={showNoteName} />
                <Switch text="Focus Mode" setter={setShowNoteName} state={showNoteName} />
                <Switch text="Dark Mode" setter={setShowNoteName} state={showNoteName} />
            </div> */}
        </div>
    );
}

export default Customizable;