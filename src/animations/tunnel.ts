import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function initTunnelAnimation() {
  const wrapper = document.querySelector('.tunnel-wrapper') as HTMLDivElement
  const circles = [...wrapper.querySelectorAll('.tunnel_circle')]
  const height = window.innerHeight * 8

  const getXPercent = (index: number) => {
    if (index % 4 === 1) {
      return -5
    }
    if (index % 4 === 3) {
      return 5
    }
    return 0
  }

  const getYPercent = (index: number) => {
    if (index % 4 === 0) {
      return 5
    }
    if (index % 4 === 2) {
      return -5
    }
    return 0
  }

  ScrollTrigger.create({
    trigger: wrapper,
    pin: true,
    scrub: true,
    start: '50% 50%',
    end: `${height}px 100%`,
    animation: gsap.fromTo(
      circles,
      {
        scale: 0,
        transformOrigin: '50% 50%',
        yPercent: (index) => getYPercent(index),
        xPercent: (index) => getXPercent(index),
      },
      {
        scale: 2,
        stagger: {
          amount: 1,
        },
        yPercent: (index) => getYPercent(index),
        xPercent: (index) => getXPercent(index),
        ease: 'power2.in',
      }
    ),
  })
}
