import { BUTTON, EVENTS } from '../consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSH_STATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleOnClick = (event) => {
    const isMainEvent = event.button === BUTTON.PRIMARY // primary click
    const isModifiedEvent = event.metaKey || event.ctrlKey || event.altKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) // SPA navigation
    }
  }

  return (
    <a href={to} onClick={handleOnClick} target={target} {...props} />
  )
}
