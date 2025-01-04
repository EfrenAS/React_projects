import { useState, useEffect } from 'react'

import './App.css'

function MouseFollower () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // pointer move
  useEffect(() => {
    console.log('Enabled Point Follower')

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event

      console.log('Mouse move', clientX, clientY)
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) { document.addEventListener('mousemove', handleMouseMove) }

    // Cleanup
    // Clean up event listener when the component is unmounted
    // whne the depedencies changed, before the effect is started again

    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [enabled])

  /** ***  change pointer mouse ******/
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => document.body.classList.remove('no-cursor')
  }, [enabled])

  return (
    <>
      <div className='mouse-pointer' style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />

      <h3>The Mouse Point Follower</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} mouse follower
      </button>
    </>
  )
}

function App () {
  return (
    <MouseFollower />
  )
}

export default App
