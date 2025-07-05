import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import './App.css'
import { ClipBoard, SpeakerWave } from './components/icons/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { TextArea } from './components/TextArea'
import { AUTO_LANGUAGE, VOICE_FOR_SPEAKER_LANGUAGE } from './constants'
import { useDebounce } from './hooks/useDebounce'
import { useStore } from './hooks/useStore'
import { translate } from './service/translate'
import { SectionType } from './types.d'

function App () {
  const {
    loading,
    setFromLanguage,
    setToLanguage,
    toText,
    fromText,
    setFromText,
    setToText,
    fromLanguage,
    toLanguage,
    interchanceLanguages
  } = useStore()

  const debouncedFromText = useDebounce(fromText)

  useEffect(() => {
    if (debouncedFromText === '') return

    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then(result => {
        if (result == null) return

        setToText(result)
      })
      .catch(error => {
        setToText('Error cannot translated!')
        console.error(error)
      })
  }, [fromLanguage, toLanguage, debouncedFromText])

  const handleClipboard = () => {
    navigator.clipboard.writeText(toText).catch(() => {})
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(toText)
    utterance.lang = VOICE_FOR_SPEAKER_LANGUAGE[toLanguage]
    utterance.rate = 0.9

    speechSynthesis.speak(utterance)
  }
  return (
    <Container fluid>
      <h1>Google Translate Clone</h1>
      <Row>
        <Col>
          <Stack gap={3}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>

        </Col>
        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchanceLanguages}>
            &#8652;
          </Button>
        </Col>
        <Col>
          <Stack gap={3}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <div style={{ position: 'relative' }}>
              <TextArea
                type={SectionType.To}
                value={toText}
                onChange={setToText}
                loading={loading}
              />
              <div style={{ position: 'absolute', right: 10, bottom: 10, display: 'flex' }}>
                <Button
                  variant='link'
                  onClick={handleClipboard}
                >
                  <ClipBoard />
                </Button>
                <Button
                  variant='link'
                  onClick={handleSpeak}
                >
                  <SpeakerWave />
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
