import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let color = '#FFFEF5'
export default function initBlackSeparatorAnimation() {
  const wrapper = document.querySelector('.black-separator') as HTMLDivElement

  ScrollTrigger.create({
    trigger: wrapper,
    start: '0% 0%',
    end: '105% 100%',
    scrub: true,
    pin: true,
    animation: gsap.to(wrapper, {
      backgroundColor: color,
    }),
    onEnter: () => {
      color = '#FFFEF5'
    },
    onEnterBack: () => {
      color = '#0D0C0B'
    },
  })
}
