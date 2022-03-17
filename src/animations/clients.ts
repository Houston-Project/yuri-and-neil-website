import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { maxWidth } from '$utils/matchMedia'

export default function initClientsAnimation() {
  // Don't create fancy animation on mobile
  if (maxWidth('Tablet')) {
    return
  }

  const wrapper = document.querySelector('.clients-wrapper') as HTMLDivElement
  const circles = [...wrapper.querySelectorAll<HTMLDivElement>('.clients-circle')]

  const height = window.innerHeight * circles.length

  ScrollTrigger.create({
    trigger: wrapper,
    start: '0% 0%',
    end: `${height}px 100%`,
    animation: animation(wrapper, circles),
    scrub: true,
    pin: true,
  })
}

const SCALE = 3

const getModulo = (i: number) => i % 4

const getXDistanceInPercent = (el: HTMLElement, mod: number) => {
  const halfWindow = window.innerWidth / 2
  const elWidth = el.offsetWidth
  const scaledElementWidth = mod === 0 ? elWidth * SCALE : (elWidth * SCALE) / 2

  return ((halfWindow + scaledElementWidth) * 100) / elWidth
}

const getYDistanceInPercent = (el: HTMLElement, mod: number) => {
  const halfWindow = window.innerHeight / 2
  const elHeight = el.offsetHeight
  const scaledElementWidth = mod === 1 ? elHeight * SCALE : (elHeight * SCALE) / 2

  return ((halfWindow + scaledElementWidth) * 100) / elHeight
}

function animation(wrapper: HTMLDivElement, circles: HTMLDivElement[]) {
  const title = wrapper.querySelector('.clients-title_svg') as HTMLImageElement
  const logos = [...wrapper.querySelectorAll<HTMLDivElement>('.client-logo')]

  const logosDistances = logos.map((logo, index) => {
    const mod = getModulo(index)

    let x = -50
    let y = -50

    if (mod === 0) {
      x = -getXDistanceInPercent(logo, mod)
    }
    if (mod === 1) {
      y = -getYDistanceInPercent(logo, mod)
    }
    if (mod === 2) {
      x = getXDistanceInPercent(logo, mod)
    }
    if (mod === 3) {
      y = getYDistanceInPercent(logo, mod)
    }

    return {
      x,
      y,
    }
  })

  return gsap
    .timeline()
    .fromTo(
      circles,
      {
        yPercent: -50,
        xPercent: -50,
        scale: 0,
      },
      {
        yPercent: -50,
        xPercent: -50,
        scale: 1.5,
        stagger: {
          amount: 3.8,
        },
        ease: 'linear',
      }
    )
    .fromTo(
      title,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.3,
      },
      0.3
    )
    .fromTo(
      logos,
      {
        top: '50%',
        left: '50%',
        yPercent: -50,
        xPercent: -50,
        scale: 0,
        transformOrigin: '50% 50%',
      },
      {
        scale: SCALE,
        xPercent: (index) => logosDistances[index]?.x || -50,
        yPercent: (index) => logosDistances[index]?.y || -50,
        stagger: {
          amount: 2,
        },
        ease: 'linear',
        duration: 0.8,
      },
      0.6
    )
    .to(
      title,
      {
        scale: 100,
        ease: 'power1.in',
      },
      '>'
    )
}
