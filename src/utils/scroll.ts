import { BodyScrollOptions, disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

const options: BodyScrollOptions = {
  reserveScrollBarGap: true,
}

export function stopScrolling() {
  const modal = document.querySelector<HTMLDivElement>('.js-modal')
  if (!modal) return
  disableBodyScroll(modal, options)
}

export function allowScrolling() {
  clearAllBodyScrollLocks()
}
