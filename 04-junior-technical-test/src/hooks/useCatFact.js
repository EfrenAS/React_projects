import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/getRamdomFact'

export default function useCatFact () {
  const [catFact, setCatFact] = useState(null)

  const refreshFact = () => {
    getRandomFact().then(newFact => setCatFact(newFact))
  }

  useEffect(() => refreshFact(), [])

  return { catFact, refreshFact }
}
