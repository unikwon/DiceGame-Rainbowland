import Board from "./Board";
import "./BoardGrid.css"
import { useState } from 'react'

export default function BoardGrid({ mark }) {
    const [isFinal, setIsFinal] = useState()

    const boxes = []
    // const color = ["blue", "#FFF9C4", "lightblue", "#BA68C8", "#D4E157", "orange", "blue",
    //     "#FFF176", "#B39DDB", "white", "white", "white", "#E1BEE7", "#F48FB1",
    //     "#FFCC80", "white", "#8BC34A", "white", "#F44336", "white", "#FFF176",
    //     "#EF5350", "white", "white", "blue", "white", "white", "#90CAF9",
    //     "#3F51B5", "white", "#FFD54F", "white", "#9575CD", "white", "#A1887F",
    //     "#B39DDB", "#9CCC65", "white", "white", "white", "lightblue", "#AED581",
    //     "blue", "#FFF9C4", "#E57373", "#8BC34A", "#FFEE58", "#FFB74D", "blue"]
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