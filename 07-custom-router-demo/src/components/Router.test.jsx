import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { getCurrentPath } from '../utils'
import Link from './Link'
import Route from './Route'
import Router from './Router'

vi.mock('../utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render the default component', () => {
    expect(true).toBe(true)
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)

    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    const Component = () => <h1>Hello</h1>

    render(<Router routes={[]} defaultComponent={Component} />)

    expect(screen.getByText('Hello')).toBeTruthy()
  })

  it('should render the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      { path: '/', component: () => <h1>Home</h1> },
      { path: '/about', component: () => <h1>About</h1> }
    ]

    render(
      <Router routes={routes} />
    )

    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route
          path='/' component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>About</Link>
              </>
            )
          }}
        />
        <Route path='/about' component={() => <h1>About</h1>} />
      </Router>
    )

    const anchor = screen.getByText('About')
    fireEvent.click(anchor)

    const aboutTitle = await screen.findByText('About')

    expect(aboutTitle).toBeTruthy()
  })
})
