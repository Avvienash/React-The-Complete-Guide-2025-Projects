import { useState } from "react"
import GameBoard from "./components/GameBoard"
import PlayerInfo from "./components/PlayerInfo"
import Log from "./components/Log";

// creat the initial game state
const initialGameState = {
  activePlayer: true,
  gameBoard:[ [null,null,null],
              [null,null,null],
              [null,null,null],],
  log: []
}

function App() {

  const [gameState,setGameState] =  useState(initialGameState)

  function handleButtonPress(rowIndex,colIndex){

    setGameState( (previousGameState) => {

      const updatedLog = [{player: previousGameState.activePlayer ? 'X' : 'O', row: rowIndex, col: colIndex},...previousGameState.log]
      console.log(updatedLog)

      const updatedGameBoard = [...previousGameState.gameBoard.map((innerArray => [...innerArray]))];
      updatedGameBoard[rowIndex][colIndex] = previousGameState.activePlayer ? 'X' : 'O';

      const updatedActivePlayer = !previousGameState.activePlayer;

      return(
        {
          activePlayer: updatedActivePlayer,
          gameBoard: updatedGameBoard,
          log: updatedLog
        }
      );

    });

  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo initialPlayerName="Player 1" playerSymbol="X" isActive={gameState.activePlayer}/>
          <PlayerInfo initialPlayerName="Player 2" playerSymbol="O" isActive={!gameState.activePlayer}/>
        </ol>
        <GameBoard handleButtonPressfnc={handleButtonPress} gameBoard={gameState.gameBoard}/>
      </div>
      <Log/>
    </>
  )
}

export default App
