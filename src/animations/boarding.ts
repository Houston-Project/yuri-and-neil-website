import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { isTouchScreen } from '$utils/isTouchScreen'

function addTextAnimation() {
  const text = document.querySelector('.boarding-wrapper .boardind_circled-text') as HTMLImageElement
  // Infinite rotation for text
  const animation = gsap.fromTo(
    text,
    {
      rotate: -180,
      transformOrigin: 'center',
    },
    {
      paused: true,
      ease: 'linear',
      duration: 20,
      rotate: 180,
      repeat: -1,
    }
  )

  ScrollTrigger.create({
    trigger: text,
    start: '0% 100%',
    end: '100% 0%',
    onEnter: () => {
      animation.play()
    },
    onLeave: () => {
      animation.pause()
    },
    onEnterBack: () => {
      animation.play()
    },
    onLeaveBack: () => {
      animation.pause()
    },
    invalidateOnRefresh: true,
  })
}

function createBoardingAnimation() {
  const wrapper = document.querySelector('.boarding-wrapper') as HTMLDivElement
  const link = document.querySelector('.boarding_link') as HTMLAnchorElement
  const arrow = wrapper.querySelector('.boarding_arrow') as HTMLDivElement
  const star = wrapper.querySelector('.boarding_star') as HTMLImageElement
  const asteroid = wrapper.querySelector('.boarding_asteroid') as HTMLImageElement

  // Move things
  let degrees = 0

  const mouseenter = () => {
    arrow.style.transition = 'unset'
    star.style.transition = 'transform .1s linear'
    asteroid.style.transition = 'transform .1s linear'
    link.style.transition = 'transform .1s linear'
  }

  const mousemove = (event: MouseEvent) => {
    const wrapperRect = wrapper.getBoundingClientRect()
    const wraperX = wrapperRect.left
    const wraperY = wrapperRect.top

    const mouseX = Math.max(0, event.clientX - wraperX)
    const mouseY = event.clientY - wraperY

    const x = mouseX - wrapper.offsetWidth / 2
    const y = mouseY - wrapper.offsetHeight / 2

    const angle = Math.atan2(x, y)
    degrees = (angle * 180) / -Math.PI

    arrow.style.transform = `rotate(${180 - 45 + degrees}deg)`
    star.style.transform = `translate(${x / 50}%,${y / 50}%)`
    asteroid.style.transform = `translate(${-x / 100}%,${-y / 100}%)`
    link.style.transform = `translate(${x / 150}%,${y / 150}%)`
  }

  const mouseleave = () => {
    arrow.style.transition = 'transform .2s ease-out'
    star.style.transition = 'transform .2s ease-out'
    asteroid.style.transition = 'transform .2s ease-out'
    link.style.transition = 'transform .2s ease-out'

    if (degrees >= 0 && degrees <= 180) {
      arrow.style.transform = 'rotate(360deg)'
    } else {
      arrow.style.transform = 'rotate(0deg)'
    }

    star.style.transform = `translate(0%,0%)`
    asteroid.style.transform = `translate(0%,0%)`
    link.style.transform = `translate(0%,0%)`
  }

  wrapper.addEventListener('mouseenter', mouseenter)
  wrapper.addEventListener('mousemove', mousemove)
  wrapper.addEventListener('mouseleave', mouseleave)

  return () => {
    wrapper.removeEventListener('mouseenter', mouseenter)
    wrapper.removeEventListener('mousemove', mousemove)
    wrapper.removeEventListener('mouseleave', mouseleave)

    arrow.style.transition = 'unset'
    star.style.transition = 'unset'
    asteroid.style.transition = 'unset'
    link.style.transition = 'unset'
    arrow.style.transform = `rotate(0deg)`
    star.style.transform = `translate(0%, 0%)`
    asteroid.style.transform = `translate(0%, 0%)`
    link.style.transform = `translate(0%, 0%)`
  }
}

let clear: undefined | (() => void) = undefined
let textAnimationIsPlaying = false
export default function initBoardingAnimation() {
  // Start text animation only once
  !textAnimationIsPlaying && addTextAnimation()
  textAnimationIsPlaying = true

  if (isTouchScreen()) {
    clear?.()
    clear = undefined
    return
  }

  clear?.()
  clear = createBoardingAnimation()
}
