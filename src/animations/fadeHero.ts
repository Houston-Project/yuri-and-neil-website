import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function fadeHero(hero: HTMLElement) {
  ScrollTrigger.create({
    trigger: hero,
    start: '0%',
    scrub: true,
    animation: gsap.to(hero, {
      opacity: 0,
      yPercent: -20,
    }),
  })
}
