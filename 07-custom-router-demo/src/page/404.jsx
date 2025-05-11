import { Link } from '../components/Link'

export default function Page404 () {
  return (
    <>
      <div>
        <img
          src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDRrY2N0NGJ3OGI1MWl0bTRjenJwcWkwcTR2dDBzNGh5YWZ3bHBiOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QMHoU66sBXqqLqYvGO/giphy.gif'
          alt="It's fine gif"
        />
      </div>
      <Link to='/'>Go back to home</Link>
    </>
  )
}
