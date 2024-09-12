import themes from "../../assets/themes";
import { usePropsProvider } from "../../providers/PropsProvider";

const Themes = () => {
    const { changeTheme, theme } = usePropsProvider();
    return (
        <div className="flex flex-col justify-around">
            <div className="border rounded-xl p-4 shadow-xl">
                <h1 className="font-spaceage">Themes</h1>
                <div className="px-20 md:px-0 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-11 gap-4 mt-4">
                    {themes.map((t, index) => (
                        <div className={`${t.gradient} p-0.5 rounded-lg ${t.name === theme.name ? "" : "opacity-30"}`}>
                            <button className="px-2 bg-white rounded-lg" index={index} onClick={() => changeTheme(t.name)}>
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