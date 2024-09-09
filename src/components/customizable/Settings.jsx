import { useState } from "react";
import { usePositionProvider } from "../../providers/PositionProvider";
import { useSoundProvider } from "../../providers/SoundProvider";
import { usePropsProvider } from "../../providers/PropsProvider";
import Zoom from "./Zoom";
import Customizable from "./Customizable";
import Octaver from "./Octaver";
import { useMediaQueryProvider } from "../../providers/MediaQueryProvider";
import { IoSettings } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";


const Settings = () => {
    const [isSettingsVisible, setIsSettingsVisible] = useState(false);
    const { octaveLeft, setOctaveLeft, setOctaveRight, octaveRight, octavesLocked } = useSoundProvider();
    const { updateVisibleNotes } = usePositionProvider();
    const { zoom, setZoom } = usePropsProvider();
    const { isLgScreen } = useMediaQueryProvider();

    return (
        <div className="w-full flex flex-col items-center ">
            <div className="w-full flex flex-row justify-around">
                {isLgScreen && <Octaver text="Octave Left" side={1} min={2} max={6} setter={setOctaveLeft} setter2={setOctaveRight} state={octaveLeft} />}
                <button
                    onClick={() => setIsSettingsVisible(!isSettingsVisible)}
                    className="flex flex-row border border-gray-300 p-2 rounded-l-xl lg:rounded-2xl items-center">
                    <IoSettings size={22} />
                    <h1 className="px-4">More Settings</h1>
                    {isSettingsVisible ? <IoMdArrowDropdown size={22} color="gray" /> : <IoMdArrowDropright size={22} color="gray" />}
                </button>
                <Zoom text="Zoom" min={1} max={30} setter={setZoom} state={zoom} updateVisible={updateVisibleNotes} lock={false} />
                {isLgScreen && <Octaver text="Octave Right" side={2} min={3} max={7} setter={setOctaveRight} setter2={setOctaveLeft} state={octaveRight} />}
            </div>
            {isSettingsVisible && <Customizable />}
        </div>
    );
}

export default Settings;