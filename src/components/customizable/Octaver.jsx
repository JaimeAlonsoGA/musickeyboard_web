import { LuLink } from "react-icons/lu";
import { LuUnlink } from "react-icons/lu";
import { GiMusicalNotes } from "react-icons/gi";
import { useSoundProvider } from "../../providers/SoundProvider";
import { CiCircleChevUp } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";


const Octaver = ({ min, max, text, setter, setter2, state, side, middleOctave, middleOctave2 }) => {
    const { octavesLocked, setKeymapKeys } = useSoundProvider();

    const decrease = () => {
        if (state >= max) return;
        if (octavesLocked) {
            setter(state + 1);
            middleOctave(prev => prev + 1);
            middleOctave2(prev => prev + 1);
            setter2(prev => prev + 1);
            setKeymapKeys([]);
        }
        else {
            setter(state + 1);
            middleOctave(prev => prev + 1);
            setKeymapKeys([]);
        };
    };

    const increment = () => {
        if (state <= min) return;
        if (octavesLocked) {
            setter(state - 1);
            middleOctave(prev => prev - 1);
            middleOctave2(prev => prev - 1);
            setter2(prev => prev - 1);
            setKeymapKeys([]);
        }
        else {
            setter(state - 1);
            middleOctave(prev => prev + 1);
            setKeymapKeys([]);
        }
    };

    return (
        <div className={`px-2 border border-gray-300 rounded-xl flex flex-row items-center justify-center py-3`}>
            <div className="flex flex-row items-center mr-8">
                <GiMusicalNotes className="mr-2" size={22} />
                <h1 className="text-gray-500">{text}</h1>
            </div>
            <div className="flex flex-row items-center">
                <button
                    onClick={increment}>
                    <CiCircleChevDown size={20} />
                </button>
                <h1 className="text-gray-500 px-4">{state - 3}</h1>
                <button onClick={decrease}>
                    <CiCircleChevUp size={20} />
                </button>
                {/* <Lock /> */}
            </div>
        </div>
    );
}

const Lock = () => {
    const { octavesLocked, setOctavesLocked } = useSoundProvider();
    return (
        <button
            className="px-4"
            onClick={() => setOctavesLocked(!octavesLocked)}>
            {octavesLocked ? <LuLink /> : <LuUnlink />}
        </button>
    )
}

export default Octaver;