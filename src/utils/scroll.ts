import { gsap } from 'gsap'

export function stopScrolling() {
  gsap.set('body', { overflowY: 'hidden', touchAction: 'none' })
}

export function allowScrolling() {
  gsap.set('body', { overflowY: 'unset', touchAction: 'unset' })
}
