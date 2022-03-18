import { allowScrolling, stopScrolling } from '$utils/scroll'

export default function createModalComponent() {
  const modal = document.createElement('div')
  modal.classList.add('js-modal')
  modal.style.position = 'fixed'
  modal.style.top = '0'
  modal.style.left = '0'
  modal.style.right = '0'
  modal.style.bottom = '0'
  modal.style.width = '100vw'
  modal.style.height = 'var(--app-height)'
  modal.style.display = 'none'
  modal.style.zIndex = '99999'
  modal.style.overflow = 'none'
  modal.style.backgroundColor = '#0D0C0B'

  const innerModal = document.createElement('div')
  innerModal.classList.add('js-modal-inner')
  innerModal.style.width = '100%'
  innerModal.style.height = '100%'
  innerModal.style.overflowY = 'scroll'

  modal.appendChild(innerModal)

  document.body.appendChild(modal)
}

export function openModal(children: HTMLElement) {
  const modal = document.querySelector('.js-modal') as HTMLDivElement
  const innerModal = document.querySelector('.js-modal-inner') as HTMLDivElement

  modal.style.display = 'block'

  innerModal.appendChild(children)
  stopScrolling()
}

export function closeModal() {
  const modal = document.querySelector('.js-modal') as HTMLDivElement
  const innerModal = document.querySelector('.js-modal-inner') as HTMLDivElement

  modal.style.display = 'none'

  innerModal.innerHTML = ''
  allowScrolling()
}
