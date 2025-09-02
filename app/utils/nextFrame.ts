export default function nextFrame(times = 1): Promise<void> {
  return new Promise((resolve) => {
    const step = () => (times-- <= 0 ? resolve() : requestAnimationFrame(step))
    requestAnimationFrame(step)
  })
}
