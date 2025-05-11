import { match } from 'path-to-regexp'
import { Children, useEffect, useState } from 'react'
import { EVENTS } from '../consts'
import { getCurrentPath } from '../utils'

export default function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(EVENTS.PUSH_STATE, onLocationChange)
    window.addEventListener(EVENTS.POP_STATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSH_STATE, onLocationChange)
      window.removeEventListener(EVENTS.POP_STATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    // Hemos usado path-to-regexp
    // para poder detectar rutas dinámicas como por ejemplo:
    // /search/:query <- :query es una ruta dinámica
    const matchUrl = match(path, { decode: decodeURIComponent })
    const matched = matchUrl(currentPath)

    if (!matched) return false

    // Guardar los parámetros de la url que eran dinámicos
    // y que hemos extraido con path-to-regexp
    routeParams = matched.params

    return true
  })?.component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
