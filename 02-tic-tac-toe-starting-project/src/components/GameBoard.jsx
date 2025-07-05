//rfc

export default function GameBoard({handleButtonPressfnc,gameBoard}) {

    return (
        <ol id="game-board">
            {gameBoard.map(
                (row,rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol,colIndex) => 
                            <li key={colIndex}>
                                <button onClick={symbol != null ? () => {} : () => handleButtonPressfnc(rowIndex, colIndex)}>{symbol}</button>
                            </li>
                        )}
                    </ol>
                </li>        
            )}
        </ol>
    )
}
