import notes from "../../assets/notes";
import { usePositionProvider } from "../../providers/PositionProvider";
import { useSoundProvider } from "../../providers/SoundProvider";

const MiniKeyboard = () => {
    return (
        <div className="h-16 flex justify-center items-center">
            <div className="lg:w-min w-full flex flex-row h-full border-2 border-black">
                {notes.map((note, i) => (
                    <MiniKeys key={i} i={i} note={note} />))}
            </div>
        </div>
    );
}

const MiniKeys = ({ note, i }) => {
    const { sounding } = useSoundProvider();
    const { visibleNotes } = usePositionProvider();
    return (
        <div className={`w-3
        ${note.white ? "" : "bg-black h-4/5 text-invisible"}
        ${sounding.includes(note.id) ? "bg-green-500" : ""}
        ${(i > visibleNotes.first && i < visibleNotes.last) ? "" : "opacity-30" }
        `}>
        </div>
    );
}

export default MiniKeyboard;