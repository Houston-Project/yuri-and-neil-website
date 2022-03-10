import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import initClientsAnimation from '$animations/clients'
import { initConstellationAimation } from '$animations/constellation'
import initHeroAnimation from '$animations/hero'
import initButtonComponents from '$components/button'
import appHeight from '$utils/appHeight'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

function main() {
  // HELPERS
  appHeight()

  // ANIMATIONS
  initHeroAnimation()
  initClientsAnimation()
  initConstellationAimation()

  // COMPONENTS
  initButtonComponents()
}

main()
