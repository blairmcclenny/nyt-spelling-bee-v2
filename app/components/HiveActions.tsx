import { useEffect } from "react"
import { RefreshCcw } from "lucide-react"
import useKeyPress from "@/app/hooks/useKeyPress"
import evaluateUserInput from "@/app/utils/evaluateUserInput"
import { useGame } from "@/app/contexts/GameContext"

export default function HiveActions() {
  const {
    input,
    setInput,
    centerLetter,
    validLetters,
    pangrams,
    answers,
    foundWords,
    shuffleState,
    setShuffleState,
    setMessage,
  } = useGame()
  const keyPress = useKeyPress()

  const handleDelete = () => {
    setInput((prev) => (prev.length ? prev.slice(0, -1) : prev))
  }

  const handleShuffle = () => {
    if (shuffleState !== "idle") return
    setShuffleState("fadingOut")
  }

  const handleSubmit = () => {
    if (!input.length) return

    const { value, points, isPangram, isError } = evaluateUserInput(
      input.join(""),
      centerLetter,
      validLetters,
      pangrams,
      answers,
      foundWords
    )

    console.log({ value, points, isPangram, isError })

    setMessage({ value, points, isPangram, isError })
    setInput([])
  }

  useEffect(() => {
    if (!keyPress) return

    if (keyPress.type === "delete") {
      handleDelete()
    } else if (keyPress.type === "space") {
      handleShuffle()
    } else if (keyPress.type === "return") {
      handleSubmit()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPress])

  return (
    <div className="text-center flex flex-row items-start justify-center flex-nowrap">
      <div
        className={[
          "order-3 flex justify-center items-center py-[15px] w-[5.5em] min-w-[5.5em] h-[3em] bg-bg-btn-standard text-base mx-2 text-text border border-stroke-tertiary rounded-[2.5em] tracking-[0.01em] select-none cursor-pointer active:bg-bg-tile-sb",
          keyPress?.type === "return" ? "bg-bg-tile-sb" : "",
        ].join(" ")}
        onClick={handleSubmit}
      >
        Enter
      </div>
      <div
        className={[
          "order-1 flex justify-center items-center py-[15px] w-[5.5em] min-w-[5.5em] h-[3em] bg-bg-btn-standard text-base mx-2 text-text border border-stroke-tertiary rounded-[2.5em] tracking-[0.01em] select-none cursor-pointer active:bg-bg-tile-sb",
          keyPress?.type === "delete" ? "bg-bg-tile-sb" : "",
        ].join(" ")}
        onClick={handleDelete}
      >
        Delete
      </div>
      <div
        className={[
          "order-2 flex justify-center items-center py-[15px] w-[3em] min-w-[3em] h-[3em] bg-bg-btn-standard text-base mx-2 text-text border border-stroke-tertiary rounded-[2.5em] tracking-[0.01em] select-none cursor-pointer active:bg-bg-tile-sb",
          keyPress?.type === "space" ? "bg-bg-tile-sb" : "",
        ].join(" ")}
        onClick={handleShuffle}
      >
        <RefreshCcw strokeWidth={1.25} />
      </div>
    </div>
  )
}
