import { useEffect, useState } from "react"

type KeyType = "letter" | "delete" | "space" | "return"

export interface KeyPress {
  type: KeyType
  value: string
}

export default function useKeyPress() {
  const [keyPress, setKeyPress] = useState<KeyPress | null>(null)

  useEffect(() => {
    function isTypingTarget(target: EventTarget | null) {
      if (!(target instanceof HTMLElement)) return false

      const tag = target.tagName.toLowerCase()
      if (tag === "input" || tag === "textarea") return true

      if (target.isContentEditable) return true

      return false
    }

    function handleKeyUp() {
      setKeyPress(null)
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (isTypingTarget(e.target) || e.ctrlKey || e.metaKey) return

      if (/^[a-zA-Z]$/.test(e.key)) {
        setKeyPress({ type: "letter", value: e.key })
      } else if (e.key === "Backspace") {
        e.preventDefault()
        setKeyPress({ type: "delete", value: "delete" })
      } else if (e.key === " ") {
        e.preventDefault()
        setKeyPress({ type: "space", value: "space" })
      } else if (e.key === "Enter") {
        setKeyPress({ type: "return", value: "return" })
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  return keyPress
}
