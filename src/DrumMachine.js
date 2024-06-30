import React from "react";
import { useState, useEffect } from "react";

export function DrumMachine() {
    const [audioPlay, setAudioPlay] = useState('');
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            playSound(e.key.toUpperCase())
        })
    }, [])

    const pads = [
        {
            id: "Q",
            keyCode: 81,
            sound: "Heater 1",
            link:
                "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
        },
        {
            id: "W",
            keyCode: 87,
            sound: "Heater 2",
            link:
                "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
        },
        {
            id: "E",
            keyCode: 69,
            sound: "Heater 3",
            link:
                "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
        },
        {
            id: "A",
            keyCode: 65,
            sound: "Heater 4",
            link:
                "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
        },
        {
            id: "S",
            keyCode: 83,
            sound: "Clap",
            link:
                "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
        },
        {
            id: "D",
            keyCode: 68,
            sound: "Open-HH",
            link:
                "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
        },
        {
            id: "Z",
            keyCode: 90,
            sound: "Kick-n'-Hat",
            link:
                "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
        },
        {
            id: "X",
            keyCode: 88,
            sound: "Kick",
            link:
                "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
        },
        {
            id: "C",
            keyCode: 67,
            sound: "Close-HH",
            link:
                "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
        }
    ];

    function playSound(selector) {
        const audio = document.getElementById(selector);
        audio.play()
        setAudioPlay(selector)
    }

    return (
        <div className="container" id="drum-machine">
            <div className="box__container">
                <div className="pad__box">
                    {pads.map((pad) => (
                        <div
                            key={pad.link}
                            onClick={() => {
                                playSound(pad.id);
                            }}
                            className="drum-pad"
                            id={pad.link}
                        >
                            {pad.id}
                            <audio className="clip" id={pad.id} src={pad.link}></audio>
                        </div>
                    ))}
                </div>
                <div className="pad__data">
                    <h1>DrumPad Machine</h1>
                    <div className="pad__screen" id="display">
                        {audioPlay}
                    </div>
                </div>
            </div>
        </div>
    );
}
