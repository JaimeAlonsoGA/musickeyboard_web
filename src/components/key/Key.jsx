import { useContext, useEffect, useRef, useState } from "react";
import { PropsContext, usePropsProvider } from "../../providers/PropsProvider";
import { useSoundProvider } from "../../providers/SoundProvider";
import { usePositionProvider } from "../../providers/PositionProvider";
import { Howl } from 'howler';
import notes from "../../assets/notes";
import { keymapLeft, keymapRight } from "../../assets/keymaps";
import { useMediaQueryProvider } from "../../providers/MediaQueryProvider";

const Key = ({ note, i }) => {
    const { notesRef, AutoScroll, isAutoScroll } = usePositionProvider();
    const { isNoteNameVisible, zoom, showNoteName } = useContext(PropsContext);
    const { playNote, removeNote, sounding, keymapKeys, octaveLeft, octaveMiddleLeft, octaveMiddleRight, octaveRight } = useSoundProvider();
    const { theme, notation, keymapOnKey } = usePropsProvider();
    const { isLgScreen } = useMediaQueryProvider();
    const [isPlaying, setIsPlaying] = useState(false);
    const [noteName, setNoteName] = useState("");
    const [isKeymapOnKey, setIsKeymapOnKey] = useState(false);
    const soundRef = useRef(null);

    const noteClassic = note.name;
    const noteEnglish = note.id.replace("sharp", "#");

    const mapRefinery = (note) => {
        const letterRegex = /[a-zA-Z]+/;
        const digitRegex = /\d+/;
        const octave = note.replace(letterRegex, "");
        // console.log("note octave" + octave, "octave Left" + octaveLeft);
        if (octave == octaveLeft) {
            const refined = note.replace(digitRegex, "1");
            return refined;
        }
        if (octave == octaveMiddleLeft || octave == octaveMiddleRight) {
            const refined = note.replace(digitRegex, "2");
            console.log("note refined" + refined);
            return refined;
        }
        if (octave == octaveRight) {
            const refined = note.replace(digitRegex, "3");
            return refined;
        }
        else return null;
    }

    const findKeyByValue = (obj, value) => {
        return Object.keys(obj).find(key => obj[key] === value);
    };

    const mapRefined = mapRefinery(note.id);

    let key;
    if (Object.values(keymapLeft).includes(mapRefined)) {
        key = findKeyByValue(keymapLeft, mapRefined).toUpperCase();
    }
    if (Object.values(keymapRight).includes(mapRefined)) {
        key = findKeyByValue(keymapRight, mapRefined).toUpperCase();
    }

    useEffect(() => { keymapKeys.includes(note.id) ? setIsKeymapOnKey(true) : setIsKeymapOnKey(false); }, [keymapKeys]);

    useEffect(() => {
        notation ? setNoteName(noteClassic) : setNoteName(noteEnglish);
    }, [notation]);

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
                if (isAutoScroll) AutoScroll(note.id);
            }
        } else if (isPlaying) {
            setIsPlaying(false);
            // sound.fade(1, 0, 1000);
            sound.stop();
        }
        // } else sound.stop();

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
                className={`h-full w-full ${noteClassic === "Mi" || noteClassic === "Si" ? `border-r-2 ${theme.border}` : ""}
        `}>
                <div className={
                    `h-4/5 w-full
                ${note.white ? `${theme.wKeys}` : `${theme.bKeys} shadow-xl`}
                ${sounding.includes(note.id) && note.white ? `${theme.wPress} shadow-none` : ""}
                ${sounding.includes(note.id) && !note.white ? `${theme.bPress} shadow-xs` : ""}
                `}
                    style={{ padding: `0 ${zoom + 8}px` }}
                />
                <div className={`flex justify-center items-center h-1/5 relative ${theme.wKeysBot} ${sounding.includes(note.id) && note.white ? `` : ""}`}>
                    {
                        note.white && <PseudoKey note={noteClassic} sounding={sounding.includes(note.id)} theme={theme} />
                    }
                    <div className={`w-4 text-center ${zoom < 10 ? "text-xs" : ""}`}>
                        <h1 className="text-gray-500">{isNoteNameVisible && (note.white ? noteName : "")}</h1>
                        {showNoteName && !isNoteNameVisible && sounding.includes(note.id) && (note.white ? noteName : "")}
                    </div>
                    {isLgScreen && <div className="absolute mb-48 font-mono text-sm font-bold">
                        {keymapOnKey && !isPlaying && isKeymapOnKey && note.white && key}
                    </div>}
                    {isLgScreen && <div className="absolute mb-60 font-mono text-sm text-white font-bold">
                        {keymapOnKey && !isPlaying && isKeymapOnKey && !note.white && key}
                    </div>}
                </div>
            </button>
        </div>
    );
}

const PseudoKey = ({ note, sounding, theme }) => {
    switch (note) {
        case "Do":
        case "Fa":
            return <PseudoRight sounding={sounding} theme={theme} />;
        case "Re":
        case "Sol":
        case "La":
            return (
                <>
                    <PseudoLeft sounding={sounding} theme={theme} />
                    <PseudoRight sounding={sounding} theme={theme} />
                </>
            )
        case "Mi":
        case "Si":
            return <PseudoLeft sounding={sounding} theme={theme} />;
        default:
            return null;
    }
}

const PseudoRight = ({ sounding, theme }) =>
    <div className={`absolute -right-1/2 h-full w-1/2 z-10 border-r-2 ${theme.border} ${theme.wKeysBot}
        ${sounding ? "" : ""}`} />

const PseudoLeft = ({ sounding, theme }) =>
    <div className={`absolute -left-1/2 h-full w-1/2 z-10 ${theme.wKeysBot}
         ${sounding ? "" : ""}`} />


export default Key;


// bg-gradient-to-b from-gray-200 to-black to-20%

//bg-gradient-to-b from-gray-500 to-black to-40% shadow-xl por -- bg-black
//bg-gradient-to-b from-green-500 to-white to-60% shadow-none -- por nada