import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../service/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const previousSearch = useRef(search) // Using useRef to avoid re-renders here

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    try {
      setIsLoading(true)
      setError(null)
      previousSearch.current = search

      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => { // Using useMemo to avoid re-renders here
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, error, isLoading }
}
