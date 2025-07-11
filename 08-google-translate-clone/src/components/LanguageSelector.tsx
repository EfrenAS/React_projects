import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPORTED_LANGUAGES } from '../constants'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export function LanguageSelector ({ onChange, value, type }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
      {
        type === SectionType.From && <option value={AUTO_LANGUAGE}>{AUTO_LANGUAGE}</option>
      }
      {
        Object.entries(SUPORTED_LANGUAGES).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))
      }
    </Form.Select>
  )
}
