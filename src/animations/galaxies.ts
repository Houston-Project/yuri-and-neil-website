import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function initGalaxiesAnimation() {
  const wrapper = document.querySelector('.galaxies-component') as HTMLDivElement
  const items = [...wrapper.querySelectorAll<HTMLDivElement>('.galaxies-component_item')]

  const animation = (item: HTMLElement, circle: HTMLElement) => {
    const path = item.querySelector('.galaxies-component_path path') as SVGPathElement
    return gsap.to(circle, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        end: 0.5,
      },
      ease: 'power1.out',
      immediateRender: true,
    })
  }

  items.forEach((item) => {
    const circle = item.querySelector('.galaxies-component_circle') as HTMLDivElement

    // circle.addEventListener('mouseenter', () => {

    // })

    ScrollTrigger.create({
      trigger: item,
      animation: animation(item, circle),
      invalidateOnRefresh: true,
      start: '10% 100%',
      end: '0% 50%',
      scrub: 0.2,
    })
  })
}