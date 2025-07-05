import { useState } from "react"
import GameBoard from "./components/GameBoard"
import PlayerInfo from "./components/PlayerInfo"
import Log from "./components/Log";
import checkWinner from "./components/checkWinner";
import GameOver from "./components/GameOver";


// creat the initial game state
const initialGameState = {
  activePlayer: true,
  gameBoard:[ [null,null,null],
              [null,null,null],
              [null,null,null],],
  log: [],
  winner: null,
  gameOver: false
}

function App() {

  const [gameState,setGameState] =  useState(initialGameState)
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");
  const [player1Start,setPlayer1Start] = useState(true);


  function handleButtonPress(rowIndex,colIndex){

    setGameState( (previousGameState) => {

      const updatedLog = [{player: previousGameState.activePlayer ? player1Name : player2Name, row: rowIndex, col: colIndex},...previousGameState.log]
      const updatedGameBoard = [...previousGameState.gameBoard.map((innerArray => [...innerArray]))];
      updatedGameBoard[rowIndex][colIndex] = previousGameState.activePlayer ? 'X' : 'O';
      const updatedActivePlayer = !previousGameState.activePlayer;
      const updatedWinner = checkWinner(updatedGameBoard)
      const updatedGameOver = (updatedLog.length == 9) || (updatedWinner != null)
      return(
        {
          activePlayer: updatedActivePlayer,
          gameBoard: updatedGameBoard,
          log: updatedLog,
          winner: updatedWinner,
          gameOver: updatedGameOver
        }
      );
    });
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo initialPlayerName={player1Name} savePlayerNameFnc={setPlayer1Name}  playerSymbol="X" isActive={gameState.activePlayer}/>
          <PlayerInfo initialPlayerName={player2Name} savePlayerNameFnc={setPlayer2Name}   playerSymbol="O" isActive={!gameState.activePlayer}/>
        </ol>
        {gameState.gameOver && <GameOver winner={gameState.winner} player1Name={player1Name} player2Name={player2Name} setGameState={setGameState} setPlayer1Start={setPlayer1Start} player1Start={player1Start}/> }
        <GameBoard handleButtonPressfnc={handleButtonPress} gameBoard={gameState.gameBoard}/>
      </div>
      <Log log={gameState.log}/>
    </>
  )
}

export default App
