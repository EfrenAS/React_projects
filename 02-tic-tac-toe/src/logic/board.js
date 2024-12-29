import { COMBO_WINNERS } from '../constants'

export function checkWinnerFrom ({ boardToCheck }) {
  for (const combo of COMBO_WINNERS) {
    const [a, b, c] = combo

    if (boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export function checkEndGame ({ newBoard }) {
  return newBoard.every((square) => square !== null)
}
