import { CohereClientV2 } from 'cohere-ai'
import type { ChatMessages } from 'cohere-ai/api/types/ChatMessages'
import { SUPORTED_LANGUAGES } from '../constants'
import type { FromLanguage, Language } from '../types'

const apiKey = import.meta.env.VITE_COHERE_API_KEY

const cohere = new CohereClientV2({
  token: apiKey
})

export async function translate ({
  text,
  fromLanguage,
  toLanguage
}: {
  text: string
  fromLanguage: FromLanguage
  toLanguage: Language
}) {
  if (fromLanguage === toLanguage) return text

  const messages = [
    {
      role: 'system',
      content: 'You are an AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also receive {{auto}} which means that you have to detect the language. You can translate to any language. The language you translate to is surrounded by `[[` and `]]`.'
    },
    {
      role: 'user',
      content: 'Hola mundo {{Spanish}} [[English]]'
    },
    {
      role: 'assistant',
      content: 'Hello world'
    },
    {
      role: 'user',
      content: 'How are you? {{auto}} [[Japanese]]'
    },
    {
      role: 'assistant',
      content: 'こんにちは'
    },
    {
      role: 'user',
      content: '¿Cómo estás? {{auto}} [[Portuguese]]'
    },
    {
      role: 'assistant',
      content: 'Como vai voce'
    }
  ]

  const fromCode = fromLanguage === 'auto' ? 'auto' : SUPORTED_LANGUAGES[fromLanguage]

  const toCode = SUPORTED_LANGUAGES[toLanguage]

  const response = await cohere.chat({
    model: 'command-a-03-2025',
    messages: [
      ...messages,
      {
        role: 'user',
        content: `${text} {{${fromCode}}} [[${toCode}]]`
      }
    ] as ChatMessages
  })

  return response.message.content?.[0].text
}
