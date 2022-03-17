import { MediaQueries } from '../types/mediaQueries'

// Check if window match a min-width querie
export function minWidth(mediaQuerie: keyof typeof MediaQueries) {
  return window.matchMedia(`(min-width: ${MediaQueries[mediaQuerie]}px)`).matches
}

// Check if window match a max-width querie
export function maxWidth(mediaQuerie: keyof typeof MediaQueries) {
  return window.matchMedia(`(max-width: ${MediaQueries[mediaQuerie]}px)`).matches
}
