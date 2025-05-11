import { useEffect } from 'react'

export default function Search ({ routeParams }) {
  useEffect(() => {
    document.title = `Search: ${routeParams.query}`
  }, [])

  return (
    <div>
      <h1>Search</h1>
      <p>You searched for: {routeParams.query}</p>
    </div>
  )
}
