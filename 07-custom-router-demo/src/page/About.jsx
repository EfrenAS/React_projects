import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'Sobre mí',
    description: 'Hola! Soy Efren, estoy creando un clone de React Router.',
    button: 'Inicio'
  },
  en: {
    title: 'About me',
    description: 'Hi! I\'m Efren, I\'m creating a React Router clone.',
    button: 'Home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
