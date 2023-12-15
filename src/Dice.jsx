import Die from "./Die";

export default function Dice({ dice }) {
    return (
        <section>
            {dice.map((v, i) => (
                <Die key={i} val={v} />
            ))}
        </section>
    )
}