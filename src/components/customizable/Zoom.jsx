import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineZoomIn } from "react-icons/md";



const Zoom = ({ min, max, text, setter, state, updateVisible }) => {
    const decrease = () => {
        if (state >= max) return;
        setter(state + 1);
        updateVisible();
    };
    const increment = () => {
        if (state <= min) return;
        setter(state - 1);
        updateVisible();
    };

    return (
        <div className="p-2 border border-gray-300 lg:rounded-2xl rounded-r-2xl flex flex-row items-center justify-center">
            <div className="flex flex-row items-center mr-4 lg:mr-8">
                <MdOutlineZoomIn className="mr-2" size={22} />
                <h1 className="text-gray-500">{text}</h1>
            </div>
            <div className="flex flex-row items-center">
                <button
                    onClick={increment}>
                    <CiCircleMinus size={20} />
                </button>
                <h1 className="text-gray-500 px-4">{state}</h1>
                <button onClick={decrease} className="px-2">
                    <CiCirclePlus size={20} />
                </button>
            </div>
        </div>
    );
}

export default Zoom;