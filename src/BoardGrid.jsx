import Board from "./Board";
import "./BoardGrid.css"
import { useState } from 'react'

export default function BoardGrid({ mark }) {
    const [isFinal, setIsFinal] = useState()

    const boxes = []
  
    const color = ["blue", "lightblue", "lightblue", "lightblue", "lightblue", "orange", "blue",
        "lightblue", "lightblue", "white", "white", "white", "lightblue", "lightblue",
        "lightblue", "white", "lightblue", "white", "lightblue", "white", "lightblue",
        "lightblue", "white", "white", "blue", "white", "white", "lightblue",
        "lightblue", "white", "lightblue", "white", "lightblue", "white", "lightblue",
        "lightblue", "lightblue", "white", "white", "white", "lightblue", "lightblue",
        "blue", "lightblue", "lightblue", "lightblue", "lightblue", "lightblue", "blue"]
    const text = ["", "", "", "", "", "S", "🌈", "",]

    for (let i = 0; i < 49; i++) {
        boxes.push(<Board key={i} color={color[i]} mark={mark} text={text[i]} id={i} setIsFinal={setIsFinal} />)
    }

    return (
        <>
            <h3 style={{ fontSize: isFinal && "3em", color: isFinal ? "white" : "blue", backgroundColor: isFinal && "#43A047", transition: "3s" }}>{isFinal && <span>🎈 Congrats! You {mark}  are in 🌈...  🎈 </span >}</h3>

            <div className="BoardGrid" >
                {boxes}
            </div>

        </>
    )
}