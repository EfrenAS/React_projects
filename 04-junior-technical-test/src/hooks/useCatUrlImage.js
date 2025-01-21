import { useEffect, useState } from 'react'

const CAT_API_URL = 'https://cataas.com/cat/says/'

export default function useCatUrlImage ({ catFact }) {
  const [catUrlImage, setCatUrlImage] = useState(null)

  useEffect(() => {
    if (!catFact) return

    const firtsthreeWords = catFact.split(' ').slice(0, 3).join(' ')

    setCatUrlImage(`${CAT_API_URL}${firtsthreeWords}`)
  }, [catFact])

  return { catUrlImage }
}
