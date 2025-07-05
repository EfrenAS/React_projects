import { useReducer } from 'react'
import { AUTO_LANGUAGE } from '../constants'
import { type Action, type FromLanguage, type Language, type State } from '../types'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'es',
  fromText: '',
  toText: '',
  loading: false
}

function reducer (state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    if (state.fromLanguage === AUTO_LANGUAGE) return state

    const loading = state.fromText !== ''

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      loading,
      toText: ''
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    if (state.fromLanguage === action.payload) return state

    const loading = state.fromText !== ''

    return {
      ...state,
      fromLanguage: action.payload,
      toText: '',
      loading
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    if (state.toLanguage === action.payload) return state

    const loading = state.fromText !== ''

    return {
      ...state,
      toLanguage: action.payload,
      toText: '',
      loading
    }
  }

  if (type === 'SET_FROM_TEXT') {
    const loading = action.payload !== ''

    return {
      ...state,
      loading,
      fromText: action.payload,
      toText: ''
    }
  }

  if (type === 'SET_TO_TEXT') {
    return {
      ...state,
      loading: false,
      toText: action.payload
    }
  }

  return state
}

export function useStore () {
  const [{ fromLanguage, toLanguage, fromText, toText, loading }, dispatch] = useReducer(reducer, initialState)

  const interchanceLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setToText = (payload: string) => {
    dispatch({ type: 'SET_TO_TEXT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    toText,
    loading,
    interchanceLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setToText
  }
}
