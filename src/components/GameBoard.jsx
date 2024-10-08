import {useState} from "react";


const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]

]

export default function GameBoard({ onSelectSquare, activePlayer}) {
    const [gameBoard, setGameBoard] = useState(intialGameBoard)


    function handleSelectSqaure(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard [rowIndex][colIndex] = activePlayer;
            return updatedBoard

        } );

        onSelectSquare();
    }

    return (
        <ol id="game-board">

            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>

                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => handleSelectSqaure(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>

            </li>)}

        </ol>
    )
}