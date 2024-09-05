import chords from "../../assets/chords";
import notes from "../../assets/notes";
import { useSoundProvider } from "../../providers/SoundProvider";

const digitRegex = /\d+/;


const checkChord = (sounding) => {
    if (sounding.length < 3) return;
    const coordNames = []
    for (let chord of chords) {
        console.log(chord.notes, sounding);
        if (chord.notes.every((note, i) => {
            const names = sounding.map((instance) => instance.replace(digitRegex, "").replace("sharp", "#"));
            console.log("clean", names)
            return names.includes(note)
        }
        )) {
            coordNames.push(chord.name);
        }
    }

    return coordNames.join(" / ");
}

const PressedNotes = () => {
    const { sounding } = useSoundProvider();

    return (
        <div className="flex flex-col justify-center items-center text-white font-bold">
            <div className="flex flex-row gap-8">
                {sounding.map((id, i) => notes.find(note => note.id === id)).sort((a, b) => {
                    console.log(a, b);
                    return a.index - b.index;
                }).map((instance, i) => {
                    return (
                        <div key={i}>{instance.name}</div>
                    );
                })}
            </div>
            <div className="border-2 border-gray-500 rounded-xl flex flex-row justify-center items-center mt-4">
                <div className="p-2">{checkChord(sounding)}</div>
            </div>
        </div>
    );
};

export default PressedNotes;