import { useState } from 'react'

import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import WinnerModal from './components/WinnerModal'

import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')

    return boardFromLocalStorage
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ?? TURNS.x
  })
  const [winner, setWinner] = useState(null) // null is winner, false is draw

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard)) // save board to local storage
    window.localStorage.setItem('turn', newTurn) // save turn to local storage

    const newWinner = checkWinnerFrom({ boardToCheck: newBoard })

    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame({ newBoard })) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>New Game</button>
      <section className="game">
        {
          board.map((_, index) => {
            return <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected= {turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected= {turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App

// Continue the lesson on 1:07:00 in this link video https://www.youtube.com/watch?v=qkzcjwnueLA&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=3 using the useEffect hook
