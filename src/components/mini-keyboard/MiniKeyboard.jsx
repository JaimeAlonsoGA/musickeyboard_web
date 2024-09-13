import notes from "../../assets/notes";
import { useMediaQueryProvider } from "../../providers/MediaQueryProvider";
import { usePositionProvider } from "../../providers/PositionProvider";
import { usePropsProvider } from "../../providers/PropsProvider";
import { useSoundProvider } from "../../providers/SoundProvider";

const MiniKeyboard = () => {
    return (
        <div className="h-16 flex justify-center items-center">
            <div className="lg:w-min w-full flex flex-row h-full border border-gray-300 rounded-xl">
                {notes.map((note, i) => (
                    <MiniKeys key={i} i={i} note={note} />))}
            </div>
        </div>
    );
}

const MiniKeys = ({ note, i }) => {
    const { sounding, keymapKeys } = useSoundProvider();
    const { visibleNotes, scrollToKey } = usePositionProvider();
    const { theme } = usePropsProvider();
    const { isLgScreen } = useMediaQueryProvider();

    return (
        <button
            className={`w-3
            ${note.white ? "" : "bg-black h-4/5 text-invisible"}
            ${(keymapKeys.includes(note.id) && note.id.includes("sharp")) && isLgScreen ? `${theme.minikeyboard}` : ""}
            ${sounding.includes(note.id) ? "bg-gradient-to-b from-green-500 to-green-200" : ""}
            ${(i > visibleNotes.first && i < visibleNotes.last) ? "" : "opacity-20"}
            `}
            onClick={() => scrollToKey(note.id)}
        >
        </button>
    );
}

export default MiniKeyboard;