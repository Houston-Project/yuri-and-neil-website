export default function initMobileMenuComponent() {
  // const pageWrapper = document.querySelector('.page-wrapper') as HTMLDivElement

  const menu = document.querySelector('.mobile-nav') as HTMLDivElement
  const openButton = document.querySelector('.mobile-menu-button-icon button.mobile-menu-button') as HTMLButtonElement
  const closeButton = menu.querySelector('.mobile-nav_top_button') as HTMLButtonElement

  const links = [...menu.querySelectorAll<HTMLAnchorElement>('.mobile-nav_middle a')]

  // const openAction = () => {
  //   menu.style.display = 'flex'
  //   pageWrapper.style.overflow = 'hidden'
  //   pageWrapper.style.height = '100vh'
  // }
  // const closeAction = () => {
  //   menu.style.display = 'none'
  //   pageWrapper.style.overflow = 'unset'
  //   pageWrapper.style.height = 'auto'
  // }

  const { body } = document

  const closeDialog = () => {
    const scrollY = body.style.top
    body.style.position = ''
    body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
    menu.style.display = 'none'
  }

  const showDialog = () => {
    menu.style.display = 'flex'
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y')
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}`
  }

  openButton.addEventListener('click', showDialog)
  closeButton.addEventListener('click', closeDialog)
  links.forEach((link) => {
    link.addEventListener('click', closeDialog)
  })

  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
  })
}
