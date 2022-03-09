import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import fadeHero from '$animations/fadeHero'
import ripple from '$animations/ripple'
import addMarginTopToVoid from '$utils/addMarginTopToVoid'

export default function initHeroAnimation() {
  const voidWrapper = document.querySelector('.rond_wrapper') as HTMLDivElement
  const rond = document.querySelector('.rond') as HTMLDivElement
  const heroSection = document.querySelector('.hero-section') as HTMLElement
  const hero = heroSection.querySelector('.hero-section_wrapper') as HTMLDivElement

  addMarginTopToVoid(voidWrapper, heroSection)
  fadeHero(hero)

  const { tl: rippleAniamtion, fade } = ripple()

  const animation = gsap
    .timeline({ defaults: { ease: 'power1.in' } })
    .to(rond, {
      scale: 6,
      transformOrigin: '50% 0%',
    })
    .to(
      rond,
      {
        y: '-100vh',
      },
      0.5
    )
    .to(rond, {
      borderRadius: '0px',
      // duration: 0,
    })

  ScrollTrigger.create({
    trigger: rond,
    start: '50% 100%',
    end: '50% 50%',
    scrub: true,
    // markers: true,
    animation,
    onEnter: () => {
      rippleAniamtion.pause()
      fade()
    },
    onLeave: () => {
      // rondWrapper.style.overflow = 'hidden'
    },
    onEnterBack: () => {
      voidWrapper.style.overflow = 'unset'
      rippleAniamtion.play()
      fade().reverse()
    },
    onLeaveBack: () => {
      rippleAniamtion.play()
      fade().reverse()
    },
  })
}
