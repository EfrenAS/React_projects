function ListMovies ({ movies }) {
  return (
    <ul className='movies-list'>
      {movies.map((movie) => (
        <li className='movie-item' key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}

function MoviesNotFound () {
  return (
    <p>No movies found</p>
  )
}

export default function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    <>
      {
        hasMovies
          ? <ListMovies movies={movies} />
          : <MoviesNotFound />
      }
    </>
  )
}
