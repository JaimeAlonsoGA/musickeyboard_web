export const keymapLeft = {
    'q': 'C',
    'w': 'D',
    'e': 'E',
    'r': 'F',
    't': 'G',
    'y': 'A',
    'u': 'B',
    // 'i': 'C',

    '2': 'Csharp',
    '3': 'Dsharp',
    '5': 'Fsharp',
    '6': 'Gsharp',
    '7': 'Asharp',
};

export const keymapRight = {
    '<': 'C',
    'z': 'D',
    'x': 'E',
    'c': 'F',
    'v': 'G',
    'b': 'A',
    'n': 'B',
    // 'm': 'C',

    'a': 'Csharp',
    's': 'Dsharp',
    'f': 'Fsharp',
    'g': 'Gsharp',
    'h': 'Asharp',
};

export const usedKeysLeft = {
    black: [
        { key: '1', used: false },
        { key: '2', used: true },
        { key: '3', used: true },
        { key: '4', used: false },
        { key: '5', used: true },
        { key: '6', used: true },
        { key: '7', used: true },
        { key: '8', used: false },

    ],
    white: [
        { key: 'q', used: true },
        { key: 'w', used: true },
        { key: 'e', used: true },
        { key: 'r', used: true },
        { key: 't', used: true },
        { key: 'y', used: true },
        { key: 'u', used: true },
        // { key: 'i', used: true },



    ],
};

export const usedKeysRight = {
    white: [
        { key: '<', used: true },
        { key: 'z', used: true },
        { key: 'x', used: true },
        { key: 'c', used: true },
        { key: 'v', used: true },
        { key: 'b', used: true },
        { key: 'n', used: true },
        // { key: 'm', used: true },
    ],
    black: [
        { key: '>', used: false },
        { key: 'a', used: true },
        { key: 's', used: true },
        { key: 'd', used: false },
        { key: 'f', used: true },
        { key: 'g', used: true },
        { key: 'h', used: true },
        { key: 'j', used: false },
    ],
};