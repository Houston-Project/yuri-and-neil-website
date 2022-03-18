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
  modal.style.overflowY = 'scroll'

  document.body.appendChild(modal)
}

export function openModal(children: HTMLElement) {
  const modal = document.querySelector('.js-modal') as HTMLDivElement

  modal.style.display = 'block'

  modal.appendChild(children)
  stopScrolling()
}

export function closeModal() {
  const modal = document.querySelector('.js-modal') as HTMLDivElement

  modal.style.display = 'none'

  modal.innerHTML = ''
  allowScrolling()
}
