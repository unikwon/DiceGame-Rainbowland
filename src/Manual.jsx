import "./Manual.css"

export default function Manual() {
    return (
        <div className="Manual">
            <br /><br /><br />
            <h2>How to Play</h2>
            <h2> 🐱 : 🐶</h2>
            <p id="rainbow" > The goal is to reach rainbowland🌈. <br />
                Whoever arrives in rainbow space first is a winner. </p>
            <p> Players start at <span id="orange">Orange space</span> <span id="blue">- S -</span> and move forward to the left space with the total of movements. </p>
            <p> <span id="blue"> Blue spaces</span> are three or four way intersections and also a short-cut.  </p>
            <ul id="number">
                <li id="number">
                    TO DECIDE WHO STARTS FIRST, both players click <span id="dice"> ROLL DICE</span> and add the number of all dice. Player with higher total is the first player.
                </li>
                <li id="number">
                    After rolling the dice, <span id="movement">the number of movement</span> will be shown above <span id="die"> 4 dice</span> for reference.

                </li>
                <li id="number">
                    Click <span id="dice"> ROLL DICE</span> to play game on each player's turn.
                </li>
                <li id="number">
                    Sum the number of all dice. And also refer the number of movement above <span id="die"> 4 dice</span>.
                </li>
                <li id="number">
                    If dice have all same numbers; 0 or 1, re-roll the dice as a bonus for the additional movements.

                </li>
                <li id="number">
                    It takes one movements per one space. On the FIRST turn, count the space based on the<span id="movement"> movements</span> from the <span id="orange">orange space</span> <span id="blue">- S -</span> and click the ending space. Your icon will show in that space.  A player will stay there until next turn.
                </li>
                <li id="number">
                    To move player's icon on the FOLLOWING turns, CLICK the player's icon in the previous space and then CLICK the board where <span id="movement"> movements</span> ends.
                </li>
                <li id="number">
                    If there is other player's icon where your <span id="movement"> movements</span> stops, click the occupied space to catch it and now it is your space.  Opponent's icon is removed and restarts from the starting point, <span id="orange">orange space</span>.
                </li>
                <li id="number">When a player stops and stays on <span id="blue"> blue spaces</span> after all <span id="movement"> movements</span>, player can take any direction on the next turn. </li>
            </ul>
            <br />
            <p id="rainbow" >Let's play and see who can ride rainbow first!!!</p>
        </div>
        // </Box >
    )
}