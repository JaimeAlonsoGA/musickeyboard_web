import React, { useContext } from "react";

const SWITCH_WIDTH_PX = 30;
const HANDLE_DIAMETER_PX = 15;
const SWITCH_OFFSET_PX = 1.5;

const Switch = ({
    containerCheckedColor = "green",
    containerUncheckedColor = "gray",
    handleCheckedColor = "white",
    handleUncheckedColor = "white",
    text,
    setter,
    state,
    type,
}) => {
    return (
        <div className={`${type === 1 ? "bg-gray-300" : ""} py-2 w-full flex flex-row items-center px-12 justify-between`}>
            <div className="w-4/5">
                <h1 className="text-gray-500">{text}</h1>
            </div>
            <div
                style={{
                    width: SWITCH_WIDTH_PX,
                    height: HANDLE_DIAMETER_PX + 2 * SWITCH_OFFSET_PX,
                    borderRadius: HANDLE_DIAMETER_PX,
                    position: "relative",
                    transition: "1s",
                    cursor: "pointer",
                    background: state ? containerCheckedColor : containerUncheckedColor,
                }}
                onClick={() => {
                    setter(!state);
                }}
            >
                <div
                    style={{
                        background: state ? handleCheckedColor : handleUncheckedColor,
                        borderRadius: "100%",
                        height: HANDLE_DIAMETER_PX,
                        width: HANDLE_DIAMETER_PX,
                        position: "absolute",
                        top: SWITCH_OFFSET_PX,
                        left: state
                            ? SWITCH_WIDTH_PX - HANDLE_DIAMETER_PX - SWITCH_OFFSET_PX
                            : SWITCH_OFFSET_PX,
                        transition: ".2s",
                    }}
                ></div>
                <input
                    type="checkbox"
                    value={state}
                    onChange={(e) => {
                        setter(e.target.value);
                    }}
                    style={{ display: "none" }}
                />
            </div>
        </div>
    );
};

export default Switch;