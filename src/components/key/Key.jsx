import { useContext, useEffect, useRef, useState } from "react";
import { PropsContext } from "../../providers/PropsProvider";
import { useSoundProvider } from "../../providers/SoundProvider";
import { usePositionProvider } from "../../providers/PositionProvider";
import { Howl } from 'howler';
import notes from "../../assets/notes";

const Key = ({ note, i }) => {
    const { notesRef } = usePositionProvider();
    const { isNoteNameVisible, zoom, showNoteName } = useContext(PropsContext);
    const { playNote, removeNote, sounding } = useSoundProvider();
    const soundRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!soundRef.current) {
            const audioSrc = notes.find(n => n.id === note.id).note;
            soundRef.current = new Howl({
                src: [audioSrc],
                volume: 1.0,
                onloaderror: (id, error) => console.error(`Failed to load sound for ${note.id}:`, error),
                onplayerror: (id, error) => console.error(`Failed to play sound for ${note.id}:`, error),
                onend: () => {
                    setIsPlaying(false);
                },
            });
        }

        const sound = soundRef.current;

        if (sounding.includes(note.id)) {
            if (!isPlaying) {
                sound.play();
                setIsPlaying(true);
            }
        } else if (isPlaying) {
            setIsPlaying(false);
            sound.fade(1, 0, 1000);
            // sound.stop();
        } else sound.stop();
        
    }, [sounding, isPlaying]);

    return (
        <div className="h-full flex flex-col">
            <button
                ref={el => notesRef.current[i] = el}
                onMouseDown={() => playNote(note.id)}
                onMouseUp={() => removeNote(note.id)}
                onMouseLeave={() => removeNote(note.id)}
                onTouchStart={() => playNote(note.id)}
                onTouchEnd={() => removeNote(note.id)}
                className={`h-full w-full ${note.name == "Mi" || note.name == "Si" ? "border-r-2" : ""}
        `}>
                <div className={
                    `h-4/5 w-full
                ${note.white ? "" : "bg-black shadow-xl"}
                ${sounding.includes(note.id) ? "bg-green-500 shadow-none" : ""}
                `}
                    style={{ padding: `0 ${zoom + 8}px` }}
                />
                <div className={`flex justify-center items-center h-1/5 relative ${sounding.includes(note.id) && note.white ? "bg-green-500" : ""}`}>
                    {
                        note.white && <PseudoKey note={note.name} sounding={sounding.includes(note.id)} />
                    }
                    <div className={`w-4 text-center ${zoom < 10 ? "text-xs" : ""}`}>
                        <h1 className="text-gray-500">{isNoteNameVisible && (note.white ? note.name : "")}</h1>
                        {showNoteName && !isNoteNameVisible && sounding.includes(note.id) && (note.white ? note.name : "")}
                    </div>
                </div>
            </button>
        </div>
    );
}

const PseudoKey = ({ note, sounding }) => {
    switch (note) {
        case "Do":
        case "Fa":
            return <PseudoRight sounding={sounding} />;
        case "Re":
        case "Sol":
        case "La":
            return (
                <>
                    <PseudoLeft sounding={sounding} />
                    <PseudoRight sounding={sounding} />
                </>
            )
        case "Mi":
        case "Si":
            return <PseudoLeft sounding={sounding} />;
        default:
            return null;
    }
}

const PseudoRight = ({ sounding }) =>
    <div className={`absolute -right-1/2 h-full w-1/2 z-10 border-r-2
        ${sounding ? "bg-green-500" : ""}`} />

const PseudoLeft = ({ sounding }) =>
    <div className={`absolute -left-1/2 h-full w-1/2 z-10
         ${sounding ? "bg-green-500" : ""}`} />


export default Key;


//bg-gradient-to-b from-gray-200 to-black to-20% 