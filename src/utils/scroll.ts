import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export function stopScrolling() {
  const modal = document.querySelector<HTMLDivElement>('.js-modal')
  if (!modal) return
  disableBodyScroll(modal)
}

export function allowScrolling() {
  const modal = document.querySelector<HTMLDivElement>('.js-modal')
  if (!modal) return
  enableBodyScroll(modal)
}
