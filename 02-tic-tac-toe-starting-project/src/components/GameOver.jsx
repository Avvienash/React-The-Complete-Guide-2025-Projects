import React from 'react'

export default function GameOver({winner,player1Name,player2Name,setGameState, setPlayer1Start, player1Start}) {

    function resetGame(){
        setPlayer1Start((e) => !e)
        setGameState( (previousGameState) => {

            return(
            {
                activePlayer: !player1Start,
                gameBoard:[ [null,null,null],
                            [null,null,null],
                            [null,null,null],],
                log: [],
                winner: null,
                gameOver: false
            }
            );
        });
    }
  
    return (
    <div id="game-over">
        <h2>Game Over</h2>
        {winner === null && <p>Draw!</p> }
        {winner === "X" && <p>{player1Name} Wins!</p> }
        {winner === "O" && <p>{player2Name} Wins!</p> }
        <p><button onClick={resetGame}>Rematch!</button></p>
    </div>
  )
}
