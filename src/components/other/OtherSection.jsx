import icon from '../../assets/icon.png';
import dev from '../../assets/dev.webp';
import notes from '../../assets/notes';
import { useState } from 'react';

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
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div>
            <Title title="What is MusicKeyboard.io?" />
            <div className="flex flex-col text-justify mx-auto w-full px-4 max-w-4xl my-4 items-center">
                <h2>
                    Developed by Jaime Alonso, MusicKeyboard.io is a free online platform where you can play the piano as in the most minimalistic way possible. Whether you're a beginner composer or an experienced musician, my virtual keyboard with realistic piano sound offers an intuitive and interactive way to practice and enjoy music.
                    Benefit from our chords database, notes tracking, and intuitive keymap. Play music online without the need to download any software. Explore various features, including a frequency chart, custom settings for the music keyboard, and a variety of color themes. Play anywhere, anytime!
                </h2>
                <div className='flex flex-row mt-12 gap-8'>
                    <img src={icon} alt={"MusicKeyboard.io"} className="w-24" />
                    {/* <a href="https://github.com/JaimeAlonsoGA" target="_blank" rel="noopener noreferrer" className="w-32"> */}
                    <div className='flex justify-center items-center w-24 p-1 rounded-full border' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                        <img src={dev} alt={"Picture of the developer with sunglasses"} className="w-24" />
                        {/* </a> */}
                        {isHovering && <h3 className='text-center font-spaceage text-xs font-medium'></h3>}
                    </div>
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
                    <div className='text-left' key={index}>
                        <h2 className="py-2 text-lg">
                            {"⦿ " + feature.f}
                            {feature.f === "Auto-scrolling" && <span className='text-xs bg-green-300 rounded-xl p-1 ml-4'>🎉 new 1.0.2</span>}
                            {feature.f === "Chords database" && <span className='text-xs bg-green-300 rounded-xl p-1 ml-4'>🎉 new 1..0.2</span>}
                            {feature.f === "Frequency chart" && <span className='text-xs bg-blue-200 rounded-xl p-1 ml-4'>See Bellow</span>}
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
            <WhyFreqChart />
        </div>
    )
}

const Chart = () => {

    return (
        <div className='w-9/12 flex flex-row mt-12 justify-around'>
            <div>
                <h2>Notes</h2>
                {notes.map((note, index) => {
                    const digitRegex = /\d+/;
                    const englishNoteName = note.id.replace(digitRegex, "").replace("sharp", "♯");
                    const classicNoteName = note.name.replace("sharp", "");
                    return (
                        <div key={index} className={`text-center ${classicNoteName === 'La' ? "bg-gradient-to-r from-white via-rose-200 to-white" : ""} p-1 border-b`}>
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
                    const classicNoteName = note.name.replace("sharp", "");

                    return (
                        <div key={index} className={`text-center ${classicNoteName === 'Do' ? "bg-gradient-to-r from-white via-blue-200 to-white" : ""} p-1 border-b`}>
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

const WhyFreqChart = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12'>
            <Title title="Why a Frequency Chart?" />
            <div className='flex flex-col text-justify w-full px-4 max-w-4xl my-4 text-justify'>
                <h2>
                    The frequency chart is a useful tool to understand the pitch of each note in the piano keyboard. The chart displays the frequency of each note in Hertz (Hz) and its corresponding octave.
                </h2>
                <h2>
                    The frequency of a note is the number of vibrations per second that the sound wave produces. The higher the frequency, the higher the pitch of the note. The frequency chart is a valuable resource for music producers, composers, and musicians who want to learn more about the science of sound and music theory.
                </h2>
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
    },
    {
        f: "Free to use",
        c: "Play the piano online without downloading any software",
    },
    {
        f: "Auto-scrolling",
        c: "Keep the notes you are playing in view with the auto-scrolling feature",
    }
]

export default OtherSection;