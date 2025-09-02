export default function waitForAllTransitions(
  els: HTMLElement[]
): Promise<void> {
  return new Promise((resolve) => {
    const total = els.length
    if (total === 0) return resolve()

    let remaining = total

    const done = () => {
      remaining -= 1
      if (remaining <= 0) resolve()
    }

    els.forEach((el) => {
      // If the element has no (delay+duration), there will be no transitionend.
      const totalMs = transitionTotalMs(el)
      const onEnd = (e: TransitionEvent) => {
        // Only count the element itself (ignore bubbled children)
        if (e.target !== el) return
        el.removeEventListener("transitionend", onEnd)
        done()
      }

      el.addEventListener("transitionend", onEnd, { once: true })

      if (totalMs === 0) {
        // No transition: settle next frame
        requestAnimationFrame(() => {
          el.removeEventListener("transitionend", onEnd)
          done()
        })
      } else {
        // Safety fallback in case a browser misses the event
        setTimeout(() => {
          el.removeEventListener("transitionend", onEnd)
          done()
        }, totalMs + 50)
      }
    })
  })
}

function transitionTotalMs(el: HTMLElement): number {
  const cs = getComputedStyle(el)
  const delays = parseTimeListToMs(cs.transitionDelay)
  const durations = parseTimeListToMs(cs.transitionDuration)
  // match lists by index (CSS allows multiple transitions); use the max total
  const len = Math.max(delays.length, durations.length)
  let max = 0
  for (let i = 0; i < len; i++) {
    const d = durations[i % durations.length] ?? 0
    const dl = delays[i % delays.length] ?? 0
    if (d + dl > max) max = d + dl
  }
  return max
}

function parseTimeListToMs(list: string): number[] {
  return list
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => (t.endsWith("ms") ? parseFloat(t) : parseFloat(t) * 1000))
}
