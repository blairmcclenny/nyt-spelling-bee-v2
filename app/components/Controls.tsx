"use client"

import { useEffect, useState } from "react"
import { useGame } from "@/app/contexts/GameContext"
import useKeyPress from "@/app/hooks/useKeyPress"
import MessageBox from "@/app/components/MessageBox"
import HiveInput from "@/app/components/HiveInput"
import Hive from "@/app/components/Hive"
import HiveActions from "@/app/components/HiveActions"
import evaluateUserInput from "@/app/utils/evaluateUserInput"

export default function Controls() {
  const {
    centerLetter,
    outerLetters,
    validLetters,
    pangrams,
    answers,
    input,
    setInput,
    foundWords,
    message,
  } = useGame()
  const keyPress = useKeyPress()

  const [shuffledOuterLetters, setShuffledOuterLetters] =
    useState<string[]>(outerLetters)

  const handleHiveCellClick = (letter: string) => {
    const ch = letter.toLowerCase()
    setInput((prev) => [...prev, ch])
  }

  const handleDelete = () => {
    setInput((prev) => (prev.length ? prev.slice(0, -1) : prev))
  }

  const handleShuffle = () => {
    setShuffledOuterLetters((prev) => [...prev].sort(() => Math.random() - 0.5))
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

    setInput([])
  }

  useEffect(() => {
    if (!keyPress) return

    if (keyPress.type === "letter") {
      handleHiveCellClick(keyPress.value)
    } else if (keyPress.type === "delete") {
      handleDelete()
    } else if (keyPress.type === "space") {
      handleShuffle()
    } else if (keyPress.type === "return") {
      handleSubmit()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPress])

  return (
    <div className="flex flex-1 relative justify-center items-center">
      <div className="sb-controls relative max-h-full flex flex-col w-[80vw] max-w-[290px] z-[3] items-center pb-[calc(--spacing(1)*2.5)] xs:pb-[calc(--spacing(5)*2.25)]">
        <MessageBox message="Nice!" type="success" points={7} />
        <HiveInput />
        <Hive />
        <HiveActions
          onDelete={handleDelete}
          onShuffle={handleShuffle}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}
