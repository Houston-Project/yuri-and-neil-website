let timer: number
export function debounce(func: () => void) {
  if (timer) clearTimeout(timer)
  timer = setTimeout(func, 100)
}
