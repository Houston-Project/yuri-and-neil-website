export function debounce<T extends Event>(func: (event: T) => void) {
  let timer: number

  return function (event: T) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(func, 100, event)
  }
}
