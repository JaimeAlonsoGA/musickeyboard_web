import themes from "../../assets/themes";
import { usePropsProvider } from "../../providers/PropsProvider";

const Themes = () => {
    const { changeTheme, theme } = usePropsProvider();
    return (
        <div className="flex flex-col justify-around">
            <div className="border rounded-xl p-4 shadow-xl">
                <h1 className="font-spaceage">Themes</h1>
                <div className="flex flex-row justify-around gap-12 mt-4">
                    {themes.map((t, index) => (
                        <div className={`${t.gradient} p-0.5 rounded-2xl ${t.name === theme.name ? "" : "opacity-30"}`}>
                            <button className="px-2 bg-white" index={index} onClick={() => changeTheme(t.name)}>
                                {t.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Themes;