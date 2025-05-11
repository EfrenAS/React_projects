import { Link } from '../components/Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page.</p>
      <Link to='/About'>Sobre mi</Link>
    </>
  )
}
