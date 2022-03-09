export default function removeWebflowBadge() {
  setTimeout(() => {
    const badge = document.querySelector<HTMLAnchorElement>('.w-webflow-badge')
    if (!badge) return

    badge.remove()
  }, 800)
}
