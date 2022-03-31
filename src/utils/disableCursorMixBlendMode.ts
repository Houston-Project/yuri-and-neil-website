import gsap from 'gsap'

export default function disableCursorMixBlendMode() {
  const heroButton = document.querySelector('.hero-section .button') as HTMLAnchorElement
  const slider = document.querySelector('.pilotes-component_slider') as HTMLDivElement
  const cursorWrapper = document.querySelector('.cursor-wrapper') as HTMLDivElement

  const disable = () => {
    cursorWrapper.style.mixBlendMode = 'unset'
    gsap
      .timeline({
        defaults: {
          duration: 0.3,
        },
      })
      .to('.cursor', {
        backgroundColor: '#0D0C0B',
      })
      .to(
        '.cursor-text',
        {
          color: '#FFFEF5',
        },
        0
      )
  }

  const active = () => {
    cursorWrapper.style.mixBlendMode = 'difference'
    gsap
      .timeline({
        defaults: {
          duration: 0.3,
        },
      })
      .to('.cursor', {
        backgroundColor: '#FFFEF5',
      })
      .set('.cursor-text', {
        color: 'unset',
      })
  }

  heroButton.addEventListener('mouseenter', () => {
    gsap.to('.cursor', {
      opacity: 0,
      duration: 0.1,
    })
  })
  slider.addEventListener('mouseenter', disable)

  heroButton.addEventListener('mouseleave', () => {
    gsap.to('.cursor', {
      opacity: 1,
      duration: 0.1,
    })
  })
  slider.addEventListener('mouseleave', active)
}
