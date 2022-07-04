import React, { useEffect } from "react";
import gifs from "../data/gifs.json";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export default function Gifs() {
    const [currentIndex, setCurrentIndex] = React.useState<number>(getRandomInt(gifs.length));

    function roll() {
        let index = getRandomInt(gifs.length);
        while (index === currentIndex) {
            index = getRandomInt(gifs.length);
        }
        setCurrentIndex(index);
    }

    useEffect(roll, []);

    return <div style={{
        "display": "flex",
        "justifyContent": "center",
        "alignContent": "center",
        "textAlign": "center",
    }}>
        <div style={{

        }}>
            <h1 style={{ "display": "block" }}>Random GIF from my handpicked collection :)</h1>
            <div style={{
                "height": "500px",
                "display": "flex",
                "alignContent": "center",
                "justifyContent": "center",
            }}>
                <img src={gifs[currentIndex]}/>
            </div>
            <button onClick={roll} style={{ "display": "block", "margin": "15px auto", }} >re-roll</button>
        </div>
    </div>
}