import { useState, useEffect, useRef, useCallback } from 'react'
import { useMovies } from './hooks/useMovies'
import Movies from './components/Movies'
import './App.css'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, setSearch] = useState('') // Controlled form, need to use useState
  const [error, setError] = useState(null)
  const isFirstSearch = useRef(true)

  const updatedSearch = (newSearch) => setSearch(newSearch)

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = search === ''
      return
    }
    if (search === '') {
      setError('No blank query')
      return
    }

    if (search.length < 3) {
      setError('Seach search must be at least 3 characters')
      return
    }

    setError(null)
  }, [search])

  return { search, error, updatedSearch }
}

function App () {
  const [sort, setSort] = useState(false)
  const { search, error, updatedSearch } = useSearch()
  const { movies, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500)
    , [getMovies])

  const handleSubmit = (event) => {
    // Uncontrolled form to capture the input value
    // const { query } = Object.fromEntries(new FormData(event.target))
    // console.log(query)
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => setSort(!sort)

  // Controlled form
  const handleChange = (event) => {
    const newSearch = event.target.value
    updatedSearch(newSearch)

    debouncedGetMovies(newSearch)
  }

  return (
    <>
      <header>
        <h1>Movie Search</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange} // Controlled form
            name='query'
            type='text'
            placeholder='Ted, The Matrix, King of the Ring ...'
            value={search}
          />
          <input type='checkbox' name='sort' id='sort' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
