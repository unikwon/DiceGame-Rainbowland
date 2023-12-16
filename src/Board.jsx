import { useState } from 'react'
import './Board.css'

export default function Board({ color, mark, text, id, setIsFinal }) {
    const [move, setMove] = useState([])



    const changeMove = (color) => {
        if (move) {
            if (move !== mark) {
                setMove(mark)

            } else {
                setMove("")
            }
        } else {
            setMove(mark)
        }

        if (id === 6) {
            setIsFinal(true)
        } else {
            setIsFinal(false)
        }
        if (color == "white") {
            setMove("")
        }
    }

    return (
        <>
            <div className="Board" onClick={() => changeMove(color)} style={{ backgroundColor: color }} >{move} {text}
            </div >
        </>
    )
}