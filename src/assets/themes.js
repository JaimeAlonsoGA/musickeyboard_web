const themes = [
    {
        name: "Default",
        gradient: "bg-gradient-to-r from-blue-600 to-pink-700",
        bKeys: "bg-gradient-to-b from-gray-500 to-black to-40%",
        bPress: "bg-gradient-to-b from-green-500 to-black to-90%",
        wKeys: "",
        wKeysBot: "",
        wPress: "bg-gradient-to-b from-green-500 to-white to-60%",
        border: "",
        minikeyboard: "bg-gradient-to-b from-blue-600 to-pink-700",
    },
    {
        name: "Darkpsy",
        gradient: "bg-gradient-to-r from-gray-800 to-rose-600",
        bKeys: "bg-gradient-to-b from-gray-500 to-black to-40%",
        bPress: "bg-gradient-to-b from-gray-700 to-black to-90%",
        wKeys: "bg-gradient-to-b from-gray-800 to-rose-600",
        wKeysBot: "bg-rose-600",
        wPress: "bg-gradient-to-b from-green-800 to-rose-600",
        border: "border-gray-800",
        minikeyboard: "bg-gradient-to-b from-gray-800 to-rose-600",
    },
    {
        name: "Lime",
        gradient: "bg-gradient-to-r from-lime-500 to-yellow-300",
        bKeys: "bg-lime-200",
        bPress: "bg-gradient-to-b from-lime-400 to-lime-200",
        wKeys: "bg-gradient-to-b from-yellow-500 to-yellow-300",
        wKeysBot: "bg-gradient-to-b from-yellow-300 to-lime-100",
        wPress: "bg-gradient-to-b from-lime-500 to-yellow-300",
        border: "border-yellow-700",
        minikeyboard: "bg-gradient-to-b from-lime-500 to-yellow-300",
    },
    {
        name: "Ocean",
        gradient: "bg-gradient-to-r from-blue-700 to-teal-500",
        bKeys: "bg-gradient-to-b from-blue-900 to-teal-700 to-40%",
        bPress: "bg-gradient-to-b from-blue-700 to-teal-900",
        wKeys: "bg-gradient-to-b from-blue-200 to-teal-300",
        wKeysBot: "bg-teal-300",
        wPress: "bg-gradient-to-b from-lime-300 to-teal-300",
        border: "border-blue-700",
        minikeyboard: "bg-gradient-to-b from-blue-700 to-teal-500",
    },
    {
        name: "Ice",
        gradient: "bg-gradient-to-r from-blue-300 to-white",
        bKeys: "bg-gradient-to-b from-blue-500 to-white to-40%",
        bPress: "bg-gradient-to-b from-lime-400 to-white to-60%",
        wKeys: "bg-gradient-to-b from-blue-200 to-white",
        wKeysBot: "bg-white",
        wPress: "bg-gradient-to-b from-lime-200 to-white",
        border: "border-blue-300",
        minikeyboard: "bg-gradient-to-b from-blue-300 to-white",
    },
    {
        name: "Clavecin",
        gradient: "bg-gradient-to-r from-white to-gray-300",
        bKeys: "bg-white",
        bPress: "bg-gradient-to-b from-gray-300 to-white",
        wKeys: "bg-black",
        wKeysBot: "bg-black",
        wPress: "bg-gradient-to-b from-gray-300 to-black",
        border: "border-gray-300",
        minikeyboard: "bg-gradient-to-b from-white to-gray-300",
    },
    {
        name: "Lavender",
        gradient: "bg-gradient-to-r from-purple-300 to-pink-300",
        bKeys: "bg-gradient-to-b from-purple-500 to-pink-500 to-40%",
        bPress: "bg-gradient-to-b from-lime-700 to-violet-200",
        wKeys: "bg-gradient-to-b from-purple-200 to-pink-100",
        wKeysBot: "bg-pink-100",
        wPress: "bg-gradient-to-b from-lime-200 to-pink-100",
        border: "border-purple-300",
        minikeyboard: "bg-gradient-to-b from-purple-300 to-pink-300",
    },
    {
        name: "Future",
        gradient: "bg-gradient-to-r from-gray-300 to-white",
        bKeys: "bg-gradient-to-b from-gray-500 to-white",
        bPress: "bg-gradient-to-b from-black to-white",
        wKeys: "bg-gradient-to-b from-black to-gray-600",
        wKeysBot: "bg-gray-600",
        wPress: "bg-gradient-to-b from-lime-300 to-gray-600",
        border: "border-gray-300",
        minikeyboard: "bg-gradient-to-b from-gray-300 to-white",
    },
    {
        name: "Sunset",
        gradient: "bg-gradient-to-r from-red-500 to-orange-500",
        bKeys: "bg-gradient-to-b from-red-700 to-orange-700 to-40%",
        bPress: "bg-gradient-to-b from-red-900 to-orange-900",
        wKeys: "bg-gradient-to-b from-red-200 to-orange-100",
        wKeysBot: "bg-orange-100",
        wPress: "bg-gradient-to-b from-lime-200 to-orange-100",
        border: "border-red-700",
        minikeyboard: "bg-gradient-to-b from-red-500 to-orange-500",
    },
    {
        name: "Latex",
        gradient: "bg-gradient-to-r from-gray-300 to-white",
        bKeys: "bg-gradient-to-b from-gray-500 to-white to-60%",
        bPress: "bg-gradient-to-b from-black to-white",
        wKeys: "bg-gradient-to-b from-gray-200 to-white",
        wKeysBot: "bg-white",
        wPress: "bg-gradient-to-b from-lime-200 to-white",
        border: "border-gray-300",
        minikeyboard: "bg-gradient-to-b from-gray-300 to-white",
    },
    {
        name: "Emerald",
        gradient: "bg-gradient-to-r from-green-500 to-teal-500",
        bKeys: "bg-gradient-to-b from-green-700 to-teal-700 to-40%",
        bPress: "bg-gradient-to-b from-green-900 to-teal-900",
        wKeys: "bg-gradient-to-b from-green-200 to-teal-100",
        wKeysBot: "bg-teal-100",
        wPress: "bg-gradient-to-b from-lime-200 to-teal-100",
        border: "border-green-500",
        minikeyboard: "bg-gradient-to-b from-green-500 to-teal-500",
    },
];

export default themes;