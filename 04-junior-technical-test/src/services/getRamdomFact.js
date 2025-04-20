const CAT_FACT_URL = 'https://catfact.ninja/fact'

export async function getRandomFact () {
  const response = await fetch(CAT_FACT_URL)
  const { fact } = await response.json()
  return fact
}
