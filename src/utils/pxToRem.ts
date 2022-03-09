export default function convertPixelsToRem(px: number) {
  return px / parseFloat(getComputedStyle(document.documentElement).fontSize)
}
