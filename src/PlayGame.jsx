import Dice from "./Dice";
import BoardGrid from "./BoardGrid";
import { useState, useEffect } from "react";
import { getRolls, sum } from './utils'
import "./PlayGame.css"
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function PlayGame({ numDice }) {
    const [dice1, setDice1] = useState(new Array(numDice).fill())
    const [total1, setTotal1] = useState(0)

    const [dice2, setDice2] = useState(new Array(numDice).fill())
    const [total2, setTotal2] = useState(0)

    const [mark, setMark] = useState([])

    useEffect(function myEffect() {
        setTotal1(sum(dice1))
        setMark("🐶")
    }, [dice1])

    const rollDice1 = () => {
        setDice1(getRolls(numDice))
    }

    useEffect(function myEffect() {
        setTotal2(sum(dice2))
        setMark("🐱")
    }, [dice2])

    const rollDice2 = () => {
        setDice2(getRolls(numDice))
    }

    return (
        <div className="PlayGame">
            <BoardGrid mark={mark} />

            <div>
                <Stack direction="row" spacing={2}>
                    <Item>
                        <h2>Player 🐶</h2>
                        <h4> Movement: {total1 > 0 ? total1 : 0} space{total1 > 1 && <span>s</span>} {total1 === 0 && " & RE-ROLL"} {total1 === 4 && " & RE-ROLL"}</h4>
                        <Dice dice={dice1} />
                        <button onClick={rollDice1}>ROLL DICE</button>
                    </Item>
                    <Item>  <h2>Player 🐱</h2>
                        <h4>Movement: {total2 > 0 ? total2 : 0} space{total2 > 1 && <span>s</span>}  {total2 === 0 && "& RE-ROLL"} {total2 === 4 && "& RE-ROLL"}</h4>
                        <Dice dice={dice2} />
                        <button onClick={rollDice2}>ROLL DICE</button></Item>

                </Stack>
            </div>
        </div>
    )
}
