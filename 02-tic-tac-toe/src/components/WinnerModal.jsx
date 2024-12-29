import { Square } from './Square'

export default function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'DRAW' : `${winner.toUpperCase()} WINS`

  return (
      <section className='winner'>
        <div className='text'>
          <h2> {winnerText}</h2>
          <header className='win'>
            {winner && <Square> {winner} </Square>}
          </header>
          <footer>
            <button onClick={resetGame}>Play Again</button>
          </footer>
        </div>
      </section>
  )
}
