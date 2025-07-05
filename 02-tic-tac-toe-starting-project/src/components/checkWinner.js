
export default function checkWinner(gameBoard) {
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    // Check row
    if (
      gameBoard[i][0] &&
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][1] === gameBoard[i][2]
    ) {
      return gameBoard[i][0]; // Winner in row
    }

    // Check column
    if (
      gameBoard[0][i] &&
      gameBoard[0][i] === gameBoard[1][i] &&
      gameBoard[1][i] === gameBoard[2][i]
    ) {
      return gameBoard[0][i]; // Winner in column
    }
  }

  // Check main diagonal
  if (
    gameBoard[0][0] &&
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][2]
  ) {
    return gameBoard[0][0];
  }

  // Check anti-diagonal
  if (
    gameBoard[0][2] &&
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][0]
  ) {
    return gameBoard[0][2];
  }

  // No winner
  return null;
}