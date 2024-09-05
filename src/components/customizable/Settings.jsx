import { useState } from "react";
import { usePositionProvider } from "../../providers/PositionProvider";
import { useSoundProvider } from "../../providers/SoundProvider";
import { usePropsProvider } from "../../providers/PropsProvider";
import Zoom from "./Zoom";
import Customizable from "./Customizable";
import Octaver from "./Octaver";
import { useMediaQueryProvider } from "../../providers/MediaQueryProvider";

const Settings = () => {
    const [isSettingsVisible, setIsSettingsVisible] = useState(false);
    const { octaveLeft, setOctaveLeft, setOctaveRight, octaveRight, octavesLocked } = useSoundProvider();
    const { updateVisibleNotes } = usePositionProvider();
    const { zoom, setZoom } = usePropsProvider();
    const { isLgScreen } = useMediaQueryProvider();

    const setOctaveRelative = () => {
        if (!octavesLocked) return null;
        setOctaveRight();
    }

    return (
        <div className="w-full flex flex-col items-center ">
            <div className="w-full flex flex-row justify-around">
                {isLgScreen && <Octaver text="Octave Left" min={1} max={7} setter={setOctaveLeft} setter2={setOctaveRight} state={octaveLeft} />}
                <button
                    onClick={() => setIsSettingsVisible(!isSettingsVisible)}
                    className="border-2 border-black p-2 rounded-md">
                    More Keyboard Settings
                </button>
                <Zoom text="Zoom" min={1} max={30} setter={setZoom} state={zoom} updateVisible={updateVisibleNotes} lock={false} />
                {isLgScreen && <Octaver text="Octave Right" min={1} max={7} setter={setOctaveRight} setter2={setOctaveLeft} state={octaveRight} />}
            </div>
            {isSettingsVisible && <Customizable />}
        </div>
    );
}

export default Settings;