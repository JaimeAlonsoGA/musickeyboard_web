const chords = [
    {
        "name": "CMaj",
        "notes": ["C", "E", "G"],
    },
    {
        "name": "CMin",
        "notes": ["C", "D#", "G"],
    },
    {
        "name": "C7",
        "notes": ["C", "E", "G", "Bb"],
    },
    {
        "name": "CMin7",
        "notes": ["C", "D#", "G", "Bb"],
    },
    {
        "name": "Cmaj7",
        "notes": ["C", "E", "G", "B"],
    },
    {
        "name": "Cdim",
        "notes": ["C", "D#", "F#"],
    },
    {
        "name": "Caug",
        "notes": ["C", "E", "G#"],
    },
    {
        "name": "Csus2",
        "notes": ["C", "D", "G"],
    },
    {
        "name": "Csus4",
        "notes": ["C", "F", "G"],
    },
    {
        "name": "C6",
        "notes": ["C", "E", "G", "A"],
    },
    {
        "name": "Cm6",
        "notes": ["C", "D#", "G", "A"],
    },
    {
        "name": "C9",
        "notes": ["C", "E", "G", "Bb", "D"],
    },
    {
        "name": "Cm9",
        "notes": ["C", "D#", "G", "Bb", "D"],
    },
    {
        "name": "Cmaj9",
        "notes": ["C", "E", "G", "B", "D"],
    },

    {
        "name": "DMaj",
        "notes": ["D", "F#", "A"],
    },
    {
        "name": "DMin",
        "notes": ["D", "F", "A"],
    },
    {
        "name": "D7",
        "notes": ["D", "F#", "A", "C"],
    },
    {
        "name": "DMin7",
        "notes": ["D", "F", "A", "C"],
    },
    {
        "name": "Dmaj7",
        "notes": ["D", "F#", "A", "C#"],
    },
    {
        "name": "Ddim",
        "notes": ["D", "F", "G#"],
    },
    {
        "name": "Daug",
        "notes": ["D", "F#", "A#"],
    },
    {
        "name": "Dsus2",
        "notes": ["D", "E", "A"],
    },
    {
        "name": "Dsus4",
        "notes": ["D", "G", "A"],
    },
    {
        "name": "D6",
        "notes": ["D", "F#", "A", "B"],
    },
    {
        "name": "Dm6",
        "notes": ["D", "F", "A", "B"],
    },
    {
        "name": "D9",
        "notes": ["D", "F#", "A", "C", "E"],
    },
    {
        "name": "Dm9",
        "notes": ["D", "F", "A", "C", "E"],
    },
    {
        "name": "Dmaj9",
        "notes": ["D", "F#", "A", "C#", "E"],
    },

    {
        "name": "EMaj",
        "notes": ["E", "G#", "B"],
    },
    {
        "name": "EMin",
        "notes": ["E", "G", "B"],
    },
    {
        "name": "E7",
        "notes": ["E", "G#", "B", "D"],
    },
    {
        "name": "EMin7",
        "notes": ["E", "G", "B", "D"],
    },
    {
        "name": "Emaj7",
        "notes": ["E", "G#", "B", "D#"],
    },
    {
        "name": "Edim",
        "notes": ["E", "G", "A#"],
    },
    {
        "name": "Eaug",
        "notes": ["E", "G#", "B#"],
    },
    {
        "name": "Esus2",
        "notes": ["E", "F#", "B"],
    },
    {
        "name": "Esus4",
        "notes": ["E", "A", "B"],
    },
    {
        "name": "E6",
        "notes": ["E", "G#", "B", "C#"],
    },
    {
        "name": "Em6",
        "notes": ["E", "G", "B", "C#"],
    },
    {
        "name": "E9",
        "notes": ["E", "G#", "B", "D", "F#"],
    },
    {
        "name": "Em9",
        "notes": ["E", "G", "B", "D", "F#"],
    },
    {
        "name": "Emaj9",
        "notes": ["E", "G#", "B", "D#", "F#"],
    },

    {
        "name": "FMaj",
        "notes": ["F", "A", "C"],
    },
    {
        "name": "FMin",
        "notes": ["F", "G#", "C"],
    },
    {
        "name": "F7",
        "notes": ["F", "A", "C", "Eb"],
    },
    {
        "name": "FMin7",
        "notes": ["F", "G#", "C", "Eb"],
    },
    {
        "name": "Fmaj7",
        "notes": ["F", "A", "C", "E"],
    },
    {
        "name": "Fdim",
        "notes": ["F", "G#", "B"],
    },
    {
        "name": "Faug",
        "notes": ["F", "A", "C#"],
    },
    {
        "name": "Fsus2",
        "notes": ["F", "G", "C"],
    },
    {
        "name": "Fsus4",
        "notes": ["F", "Bb", "C"],
    },
    {
        "name": "F6",
        "notes": ["F", "A", "C", "D"],
    },
    {
        "name": "Fm6",
        "notes": ["F", "G#", "C", "D"],
    },
    {
        "name": "F9",
        "notes": ["F", "A", "C", "Eb", "G"],
    },
    {
        "name": "Fm9",
        "notes": ["F", "G#", "C", "Eb", "G"],
    },
    {
        "name": "Fmaj9",
        "notes": ["F", "A", "C", "E", "G"],
    },

    {
        "name": "GMaj",
        "notes": ["G", "B", "D"],
    },
    {
        "name": "GMin",
        "notes": ["G", "A#", "D"],
    },
    {
        "name": "G7",
        "notes": ["G", "B", "D", "F"],
    },
    {
        "name": "GMin7",
        "notes": ["G", "A#", "D", "F"],
    },
    {
        "name": "Gmaj7",
        "notes": ["G", "B", "D", "F#"],
    },
    {
        "name": "Gdim",
        "notes": ["G", "A#", "C#"],
    },
    {
        "name": "Gaug",
        "notes": ["G", "B", "D#"],
    },
    {
        "name": "Gsus2",
        "notes": ["G", "A", "D"],
    },
    {
        "name": "Gsus4",
        "notes": ["G", "C", "D"],
    },
    {
        "name": "G6",
        "notes": ["G", "B", "D", "E"],
    },
    {
        "name": "Gm6",
        "notes": ["G", "A#", "D", "E"],
    },
    {
        "name": "G9",
        "notes": ["G", "B", "D", "F", "A"],
    },
    {
        "name": "Gm9",
        "notes": ["G", "A#", "D", "F", "A"],
    },
    {
        "name": "Gmaj9",
        "notes": ["G", "B", "D", "F#", "A"],
    },

    {
        "name": "AMaj",
        "notes": ["A", "C#", "E"],
    },
    {
        "name": "AMin",
        "notes": ["A", "C", "E"],
    },
    {
        "name": "A7",
        "notes": ["A", "C#", "E", "G"],
    },
    {
        "name": "AMin7",
        "notes": ["A", "C", "E", "G"],
    },
    {
        "name": "Amaj7",
        "notes": ["A", "C#", "E", "G#"],
    },
    {
        "name": "Adim",
        "notes": ["A", "C", "D#"],
    },
    {
        "name": "Aaug",
        "notes": ["A", "C#", "E#"],
    },
    {
        "name": "Asus2",
        "notes": ["A", "B", "E"],
    },
    {
        "name": "Asus4",
        "notes": ["A", "D", "E"],
    },
    {
        "name": "A6",
        "notes": ["A", "C#", "E", "F#"],
    },
    {
        "name": "Am6",
        "notes": ["A", "C", "E", "F#"],
    },
    {
        "name": "A9",
        "notes": ["A", "C#", "E", "G", "B"],
    },
    {
        "name": "Am9",
        "notes": ["A", "C", "E", "G", "B"],
    },
    {
        "name": "Amaj9",
        "notes": ["A", "C#", "E", "G#", "B"],
    },

    {
        "name": "BMaj",
        "notes": ["B", "D#", "F#"],
    },
    {
        "name": "BMin",
        "notes": ["B", "D", "F#"],
    },
    {
        "name": "B7",
        "notes": ["B", "D#", "F#", "A"],
    },
    {
        "name": "BMin7",
        "notes": ["B", "D", "F#", "A"],
    },
    {
        "name": "Bmaj7",
        "notes": ["B", "D#", "F#", "A#"],
    },
    {
        "name": "Bdim",
        "notes": ["B", "D", "F"],
    },
    {
        "name": "Baug",
        "notes": ["B", "D#", "F##"],
    },
    {
        "name": "Bsus2",
        "notes": ["B", "C#", "F#"],
    },
    {
        "name": "Bsus4",
        "notes": ["B", "E", "F#"],
    },
    {
        "name": "B6",
        "notes": ["B", "D#", "F#", "G#"],
    },
    {
        "name": "Bm6",
        "notes": ["B", "D", "F#", "G#"],
    },
    {
        "name": "B9",
        "notes": ["B", "D#", "F#", "A", "C#"],
    },
    {
        "name": "Bm9",
        "notes": ["B", "D", "F#", "A", "C#"],
    },
    {
        "name": "Bmaj9",
        "notes": ["B", "D#", "F#", "A#", "C#"],
    },
];

export default chords;