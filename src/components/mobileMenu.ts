export default function initMobileMenuComponent() {
  const { body } = document

  const menu = document.querySelector('.mobile-nav') as HTMLDivElement
  const openButton = document.querySelector('.mobile-menu-button-icon button.mobile-menu-button') as HTMLButtonElement
  const closeButton = menu.querySelector('.mobile-nav_top_button') as HTMLButtonElement

  const links = [...menu.querySelectorAll<HTMLAnchorElement>('.mobile-nav_middle a')]

  const openAction = () => {
    menu.style.display = 'flex'
    body.style.overflowY = 'hidden'
  }
  const closeAction = () => {
    menu.style.display = 'none'
    body.style.overflowY = 'unset'
  }

  openButton.addEventListener('click', openAction)
  closeButton.addEventListener('click', closeAction)
  links.forEach((link) => {
    link.addEventListener('click', closeAction)
  })
}
