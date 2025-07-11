import type { AUTO_LANGUAGE, SUPORTED_LANGUAGES } from './constants'

export type Language = keyof typeof SUPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = AutoLanguage | Language

export interface State {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  toText: string
  loading: boolean
}

export type Action =
  { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
  | { type: 'SET_TO_LANGUAGE', payload: Language }
  | { type: 'SET_FROM_TEXT', payload: string }
  | { type: 'SET_TO_TEXT', payload: string }

export enum SectionType {
  From = 'from',
  To = 'to'
}
