import { useCallback, useEffect, useRef } from "react"
import { useGame } from "@/app/contexts/GameContext"

export default function MessageBox() {
  const { input, message, setMessage } = useGame()
  const boxRef = useRef<HTMLDivElement | null>(null)
  const animCount = useRef(0)

  useEffect(() => {
    animCount.current = 0
  }, [message])

  useEffect(() => {
    if (message && input.length > 0) setMessage(null)
  }, [input]) // eslint-disable-line react-hooks/exhaustive-deps

  const maybeDone = useCallback(() => {
    if (!message) return
    if (animCount.current === 0) {
      setMessage(null)
    }
  }, [message, setMessage])

  const onAnimStart = () => {
    if (!message) return
    animCount.current += 1
  }

  const onAnimEnd = () => {
    if (!message) return
    animCount.current = Math.max(0, animCount.current - 1)
    maybeDone()
  }

  useEffect(() => {
    const el = boxRef.current
    if (!el) return

    const onCancel = (e: Event) => {
      if (!message) return
      if (e.type === "animationcancel") {
        animCount.current = Math.max(0, animCount.current - 1)
      }
      maybeDone()
    }

    el.addEventListener("animationcancel", onCancel, { capture: true })

    return () => {
      el.removeEventListener("animationcancel", onCancel, {
        capture: true,
      })
    }
  }, [message, maybeDone])

  return (
    <div
      ref={boxRef}
      onAnimationStartCapture={onAnimStart}
      onAnimationEndCapture={onAnimEnd}
      className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-center"
    >
      {message ? (
        <>
          <span
            className={[
              "whitespace-nowrap inline-block relative opacity-0 py-2 px-3.5 rounded-[3px] bottom-2.5 text-[0.875em] min-w-[65px] transform-gpu backface-hidden perspective-distant",
              message?.isError
                ? "animate-fade-show bg-bg-toast-sb-error text-text-alternate-constant"
                : message?.isPangram
                ? "bg-bg-sb text-text-constant animate-pop"
                : "text-text-constant bg-bg-toast-alternate-constant border border-stroke-tertiary animate-pop",
            ].join(" ")}
          >
            {message?.value}
          </span>
          {!message?.isError && (
            <span className="block absolute bottom-2.5 -right-9 opacity-0 font-bold animate-float">
              +{message?.points}
            </span>
          )}
        </>
      ) : null}
    </div>
  )
}
