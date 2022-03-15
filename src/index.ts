import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import initBoardingAnimation from '$animations/boarding.js'
import initClientsAnimation from '$animations/clients'
import initConstellationAimation from '$animations/constellation'
import initHeroAnimation from '$animations/hero'
import initButtonComponents from '$components/button'
import appHeight from '$utils/appHeight'

import { DrawSVGPlugin } from './plugins/DrawSVGPlugin.js'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin)

const page = window.location.pathname

function main() {
  // COMPONENTS
  initButtonComponents()

  // HELPERS
  appHeight()

  if (page === '/') {
    // ANIMATIONS
    initHeroAnimation()
    initClientsAnimation()
    initConstellationAimation()

    initBoardingAnimation()

    window.addEventListener('resize', () => {
      initBoardingAnimation()
    })
  }
}

main()
