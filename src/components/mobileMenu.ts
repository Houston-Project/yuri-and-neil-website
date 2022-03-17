import { gsap } from 'gsap'

export default function initMobileMenuComponent() {
  const menu = document.querySelector('.mobile-nav') as HTMLDivElement
  const openButton = document.querySelector('.mobile-menu-button-icon button.mobile-menu-button') as HTMLButtonElement
  const closeButton = menu.querySelector('.mobile-nav_top_button') as HTMLButtonElement

  const links = [...menu.querySelectorAll<HTMLAnchorElement>('.mobile-nav_middle a')]

  function stopScrolling() {
    gsap.set('body', { overflowY: 'hidden', touchAction: 'none' })
  }

  function allowScrolling() {
    gsap.set('body', { overflowY: 'unset', touchAction: 'unset' })
  }

  const openAction = () => {
    menu.style.display = 'flex'
    stopScrolling()
  }
  const closeAction = () => {
    menu.style.display = 'none'
    allowScrolling()
  }

  openButton.addEventListener('click', openAction, {
    capture: true,
  })
  closeButton.addEventListener('click', closeAction, {
    capture: true,
  })

  links.forEach((link) => {
    link.addEventListener('click', closeAction)
  })
}
