import { useState } from 'react'
import './Board.css'

export default function Board({ color, mark, text, id, setIsFinal }) {
    const [move, setMove] = useState([])

    const changeMove = () => {
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
    }

    return (
        <>
            <div className="Board" onClick={changeMove} style={{ backgroundColor: color }} >{move} {text}
            </div >
        </>
    )
}