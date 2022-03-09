import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import initClientsAnimation from '$animations/clients'
import { initConstellationAimation } from '$animations/constellation'
import initHeroAnimation from '$animations/hero'
import initButtonComponents from '$components/button'
import removeWebflowBadge from '$utils/removeWebflowBadge'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin)

function main() {
  removeWebflowBadge()

  // ANIMATIONS
  initHeroAnimation()
  initClientsAnimation()
  initConstellationAimation()

  // COMPONENTS
  initButtonComponents()
}

document.addEventListener('DOMContentLoaded', main)
