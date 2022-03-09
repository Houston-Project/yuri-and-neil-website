import { gsap } from 'gsap'

export default function ripple() {
  const ripples = [...document.querySelectorAll('[class^=rond-ripple]')]

  ripples.reverse()

  const tl = gsap.timeline({
    defaults: {
      ease: 'power1.inOut',
      stagger: {
        amount: 1,
      },
    },
    repeat: -1,
  })

  tl.fromTo(
    ripples,
    {
      scale: 1,
      opacity: 0,
    },
    {
      scale: 1.02,
      duration: 1,
      opacity: (index) => {
        return 1 / ripples.length / (index + 1) + 0.1
      },
    }
  ).to(
    ripples,
    {
      scale: 1,
      opacity: 0,
    },
    '-=1'
  )

  const fade = () => gsap.to(ripples, { opacity: 0 })

  return { tl, fade }
}
