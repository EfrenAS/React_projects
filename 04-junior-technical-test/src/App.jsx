import useCatUrlImage from './hooks/useCatUrlImage'
import useCatFact from './hooks/useCatFact'

export default function App () {
  const { catFact, refreshFact } = useCatFact()
  const { catUrlImage } = useCatUrlImage({ catFact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Cat Fact</h1>
      <button onClick={handleClick}>Get a new cat fact</button>
      <div className='cat-fact-container'>
        {catUrlImage && <img src={catUrlImage} alt='A random cat image with the first three words of the cat fact' />}
        {catFact && <p>{catFact}</p>}
      </div>
    </main>
  )
}
