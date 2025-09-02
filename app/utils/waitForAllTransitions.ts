export default function waitForAllTransitions(
  nodes: Iterable<Element>
): Promise<void> {
  const els = Array.from(nodes) as HTMLElement[]
  if (els.length === 0) return Promise.resolve()
  return Promise.all(els.map(waitForTransition)).then(() => {})
}

function waitForTransition(el: HTMLElement): Promise<void> {
  return new Promise((resolve) => {
    const { transitionDuration, transitionDelay } = getComputedStyle(el)
    const total = toMs(transitionDuration) + toMs(transitionDelay)

    if (total === 0) {
      requestAnimationFrame(() => resolve())
      return
    }

    const onEnd = (e: Event) => {
      if (e.target !== el) return
      el.removeEventListener("transitionend", onEnd as EventListener)
      resolve()
    }

    el.addEventListener("transitionend", onEnd as EventListener, { once: true })
  })
}

function toMs(list: string): number {
  return list
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => (t.endsWith("ms") ? parseFloat(t) : parseFloat(t) * 1000))
    .reduce((max, n) => Math.max(max, n), 0)
}
