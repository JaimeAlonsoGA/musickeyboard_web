import { useMediaQueryProvider } from "../../providers/MediaQueryProvider";
import { usePositionProvider } from "../../providers/PositionProvider";
import { usePropsProvider } from "../../providers/PropsProvider";
import Switch from "./NoteNameSwitch";

const Customizable = () => {
    const { isNoteNameVisible, setIsNoteNameVisible, isKeymapVisible, setIsKeymapVisible,
        setIsMiniKeyboardVisible, isMiniKeyboardVisible, setShowNoteName, showNoteName, scrollbarVisible,
        setScrollbarVisible, notation, setNotation, keymapOnKey, setKeymapOnKey } = usePropsProvider();
    const { isAutoScroll, setIsAutoScroll } = usePositionProvider();
    const { isLgScreen } = useMediaQueryProvider();
    return (
        <div className="flex flex-col w-full bg-gray-200 mt-2">
            <div className="w-full flex flex-col lg:grid-cols-4 xl:grid-cols-5 items-center justify-between">
                {isLgScreen && <Switch text="Show Computer Keys On Note" setter={setKeymapOnKey} state={keymapOnKey} type={2} />}
                <Switch text="Reveal Played Notes and Chords Names" setter={setShowNoteName} state={showNoteName} type={1} />
                {isLgScreen && <Switch text="Keyboard Auto-Scrolling (pressed notes always in view)" setter={setIsAutoScroll} state={isAutoScroll} type={2} />}
                {isLgScreen && <Switch text="Show Key Mapping" setter={setIsKeymapVisible} state={isKeymapVisible} type={1} />}
                <Switch text="Note Name On Every Key" setter={setIsNoteNameVisible} state={isNoteNameVisible} type={2} />
                <Switch text="Keyboard Notation (C/Do)" setter={setNotation} state={notation} type={1} />
                <Switch text="Hide Scrollbar" setter={setScrollbarVisible} state={scrollbarVisible} type={2} />
                <Switch text="Show Keyboard Position" setter={setIsMiniKeyboardVisible} state={isMiniKeyboardVisible} type={1} />
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