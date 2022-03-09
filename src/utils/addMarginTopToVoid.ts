import convertPixelsToRem from './pxToRem'

export default function addMarginTopToVoid(wrapper: HTMLElement, section: HTMLElement) {
  const windowHeight = window.innerHeight
  const wrapperheight = wrapper.offsetHeight
  const marginTopInPixels = windowHeight - wrapperheight / 2 - section.offsetHeight
  const marginTopInRem = convertPixelsToRem(marginTopInPixels) + 1

  if (marginTopInRem > 0) {
    wrapper.style.marginTop = marginTopInRem + 'rem'
  }
}
