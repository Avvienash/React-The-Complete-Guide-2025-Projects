import PlayerInfo from "./components/PlayerInfo"


function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <PlayerInfo initialPlayerName="Player 1" playerSymbol="X" />
        <PlayerInfo initialPlayerName="Player 2" playerSymbol="O" />
      </ol>
    </div>
  )
}

export default App
