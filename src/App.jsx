import {useState} from "react";


import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";


function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelectSqaure () {
        setActivePlayer( () => activePlayer === 'X' ? '0' : 'X');
    }

    return (<main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player intialName="Player 1" symbol="X" activePlayer={activePlayer === 'X'} />
                <Player intialName="Player 2" symbol="O" activePlayer={activePlayer === '0'} />



            </ol>

            <GameBoard onSelectSquare={handleSelectSqaure} activePlayer={activePlayer}/>
        </div>

        <Log />
    </main>)
}

export default App
