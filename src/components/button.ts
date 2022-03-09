import { gsap } from 'gsap'

import { isTouchScreen } from '$utils/isTouchScreen'

export default function initButtonComponents() {
  const buttons = [...document.querySelectorAll<HTMLLinkElement>('[data-button]')]

  buttons.forEach((button) => addButtonAnimation(button))
}

function animation(textTop: HTMLDivElement, textBottom: HTMLDivElement) {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.2,
    },
    paused: true,
  })

  tl.fromTo(
    textTop,
    {
      yPercent: 0,
    },
    {
      yPercent: -100,
    }
  ).fromTo(
    textBottom,
    {
      y: '100%',
    },
    {
      y: 0,
    },
    0
  )

  return tl
}

function addButtonAnimation(button: HTMLLinkElement) {
  const textTop = button.querySelector<HTMLDivElement>('[data-button-text-top]')
  const textBottom = button.querySelector<HTMLDivElement>('[data-button-text-bottom]')

  if (!textTop || !textBottom) return

  const tl = animation(textTop, textBottom)

  button.addEventListener('mouseenter', () => {
    if (isTouchScreen()) return
    tl.play()
  })

  button.addEventListener('mouseleave', () => {
    if (isTouchScreen()) return
    tl.reverse()
  })
}
