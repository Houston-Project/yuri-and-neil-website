import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import { closeModal, openModal } from '$components/modal'

export default function initGalaxiesAnimation() {
  const wrapper = document.querySelector('.galaxies-component') as HTMLDivElement
  const items = [...wrapper.querySelectorAll<HTMLDivElement>('.galaxies-component_item')]
  // const galaxieModals = [...document.querySelectorAll<HTMLDivElement>('.galaxies-modals .galaxie-modal')]

  // items.forEach((item, index) => {
  //   const modal = galaxieModals[index]
  //   if (!modal) return

  //   const circle = item.querySelector('.galaxies-component_circle') as HTMLDivElement

  //   const closeButton = modal.querySelector('button.invisble-button') as HTMLButtonElement
  //   closeButton.addEventListener('click', () => {
  //     modal.style.display = 'none'
  //     closeModal()
  //   })

  //   circle.addEventListener('click', () => {
  //     modal.style.display = 'block'
  //     openModal(modal, '#FFFEF5')
  //   })
  // })

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
    })
  }

  items.forEach((item) => {
    const circle = item.querySelector('.galaxies-component_circle') as HTMLDivElement
    const img = item.querySelector('img') as HTMLImageElement

    ScrollTrigger.create({
      trigger: img,
      animation: animation(item, circle),
      start: '10% 100%',
      end: '0% 70%',
      scrub: true,
      invalidateOnRefresh: true,
    })
  })
}
