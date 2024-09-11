import icon from '../../assets/icon.png';
import dev from '../../assets/dev.webp';
import notes from '../../assets/notes';

const OtherSection = () => {
    return (
        <div className="mt-24">
            <WhatIsMusicKeyboard />
            <FrequencyChart />
        </div>
    )
}

const Title = ({ title }) => {
    return (
        <h1 className="text-xl text-center font-spaceage">
            {title}
        </h1>
    )
}

const WhatIsMusicKeyboard = () => {
    return (
        <div>
            <Title title="What is MusicKeyboard.io?" />
            <div className="flex flex-col text-justify px-8 my-4 items-center">
                <h2>
                    Developed by Jaime Alonso, MusicKeyboard.io is a free online platform where you can play the piano as in the most minimalistic way possible. Whether you're a beginner composer or an experienced musician, our virtual keyboard with realistic piano sound offers an intuitive and interactive way to practice and enjoy music.
                    Benefit from our chords database, notes tracking, and intuitive keymap. Play music online without the need to download any software. Explore various features, including a frequency chart, custom settings for the music keyboard, and a variety of color themes. Play anywhere, anytime!
                </h2>
                <div className='flex flex-row mt-12 gap-8'>
                    <img src={icon} alt={"MusicKeyboard.io"} className="w-32" />
                    <a href="https://github.com/JaimeAlonsoGA" target="_blank" rel="noopener noreferrer" className="w-32">
                        <img src={dev} alt={"Picture of the developer with sunglasses"} className="w-32" />
                    </a>
                </div>
            </div>
            <Features />
        </div>
    )
}

const Features = () => (
    <div className='flex flex-col justify-center items-center text-center mt-12'>
        <div className=' border-2 rounded-xl shadow-xl p-4'>
            <Title title="Features" />
            <div className='mt-12'>
                {features.map((feature, index) => (
                    <div className='text-left'>
                        <h2 className="py-2 text-lg">
                            {"⦿ " + feature.f}
                        </h2>
                        <h3 className='font-light text-md'>{feature.c}</h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

const FrequencyChart = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12'>
            <Title title="Frequency Chart" />
            <Chart />
        </div>
    )
}

const Chart = () => {

    return (
        <div className='flex flex-row mt-12 w-full justify-around'>
            <div>
                <h2>Notes</h2>
                {notes.map((note, index) => {
                    const digitRegex = /\d+/;
                    const englishNoteName = note.id.replace(digitRegex, "").replace("sharp", "♯");
                    const classicNoteName = note.name.replace("sharp", "");
                    return (
                        <div key={index} className='p-1 border-b'>
                            {englishNoteName}
                            {" / " + classicNoteName}
                        </div>
                    )
                }
                )
                }

            </div>
            <div>
                <h2>Frequency (Hz)</h2>
                {notes.map((note, index) =>
                    <div key={index} className='text-center p-1 border-b'>
                        {note.frecuency}
                    </div>
                )
                }
            </div>
            <div>
                <h2>Octave</h2>
                {notes.map((note, index) => {
                    const letterRegex = /[a-zA-Z]+/g;
                    const octave = note.id.replace(letterRegex, "");
                    return (
                        <div key={index} className='p-1 border-b'>
                            {octave}
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
    )
}

const features = [
    {
        f: "7 octave piano keyboard",
        c: "play the piano from C2 to B7. 71 keys in total",
    },
    {
        f: "Recorded piano sound",
        c: "Recorded by enginneers with 10 seconds sustain; in mono, for best quality and speed on every device",
    }
    ,
    {
        f: "Chords database",
        c: "play multiple notes simultaneously and see which chords they belong to",
    },
    {
        f: "Notes tracking",
        c: "see the notes you are playing in real time, ordered by frequency",
    },
    {
        f: "Intuitive keymap",
        c: "play the piano using your computer keyboard",
    },
    {
        f: "Custom settings",
        c: "adjust the octaves played with the keymap, the zoom and customize the appearance of the keyboard",
    },
    {
        f: "Color themes",
        c: "choose your favorite color theme and feel inspired",
    },
    {
        f: "Frequency chart",
        c: "check the frequency of each note in the piano keyboard from C2 to B7",
    },
    {
        f: "Suitable on portable devices",
        c: "Use MusicKeyboard.io on your smartphone or tablet",
    }
]

export default OtherSection;