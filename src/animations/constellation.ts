import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { closeModal, openModal } from '$components/modal'
import { maxWidth } from '$utils/matchMedia'

export default function initConstellationAimation() {
  const items = [...document.querySelectorAll<HTMLDivElement>('.constellation-logos_wrapper .constellation-logo')]
  const constellationModals = [
    ...document.querySelectorAll<HTMLDivElement>('.constellation-modals .constellation-modal'),
  ]

  const mobileItems = [...document.querySelectorAll<HTMLDivElement>('.mobile-constellation .mobile-constellation_item')]

  const createModalForConstellations = (item: HTMLDivElement, index: number) => {
    const modal = constellationModals[index]
    if (!modal) return

    const closeButton = modal.querySelector('button.invisble-button') as HTMLButtonElement
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none'
      closeModal()
    })

    item.addEventListener('click', () => {
      modal.style.display = 'block'
      openModal(modal, '#0D0C0B')
    })
  }

  mobileItems.forEach(createModalForConstellations)
  items.forEach(createModalForConstellations)

  // Don't create fancy animation on mobile
  if (maxWidth('Tablet')) {
    return
  }

  const wrapper = document.querySelector('.constellation-component') as HTMLDivElement

  const path = wrapper.querySelector('.constellation-path path') as SVGPathElement

  const logosWrapper = wrapper.querySelector('.constellation-logos_wrapper') as HTMLDivElement
  const logos = [...logosWrapper.querySelectorAll<HTMLDivElement>('.constellation-logo')]
  const texts = [...logosWrapper.querySelectorAll<HTMLDivElement>('.constellation-logo_title')]

  const animation = gsap
    .timeline({
      paused: true,
    })
    .fromTo(
      path,
      {
        drawSVG: '0%',
      },
      {
        drawSVG: '100%',
        duration: 1,
      }
    )

  logos.forEach((l, i) => {
    animation.to(
      l,
      {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          end: 1 - i * (1 / logos.length),
        },
        transformOrigin: '50% 50%',
        immediateRender: true,
        duration: 1,
        stagger: {
          amount: 0.1,
        },
        delay: 0.04 * i,
      },
      0
    )
  })

  animation.fromTo(
    texts,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.2,
      stagger: {
        amount: 0.1,
      },
    }
  )

  ScrollTrigger.create({
    trigger: wrapper,
    start: '50% 50%',
    end: '200% 100%',
    onEnter: () => {
      animation.play()
    },
    pin: true,
  })
}
