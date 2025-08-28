"use client"

import { createContext, useContext, useState } from "react"
import { games } from "@/app/data/mock"

const GameContext = createContext<{
  centerLetter: string
  outerLetters: string[]
  validLetters: string[]
  pangrams: string[]
  answers: string[]
  input: string[]
  setInput: (input: string[]) => void
  foundWords: string[]
  message: string | null
}>({
  centerLetter: "",
  outerLetters: [],
  validLetters: [],
  pangrams: [],
  answers: [],
  input: [],
  setInput: () => {},
  foundWords: [],
  message: null,
})

export function GameProvider({ children }: { children: React.ReactNode }) {
  const currentGame = games[0] // TODO: implement game selection logic (randomize)
  const [input, setInput] = useState<string[]>([])

  return (
    <GameContext
      value={{
        centerLetter: currentGame.centerLetter,
        outerLetters: currentGame.outerLetters,
        validLetters: currentGame.validLetters,
        pangrams: currentGame.pangrams,
        answers: currentGame.answers,
        input: input,
        setInput: setInput,
        foundWords: [],
        message: null,
      }}
    >
      {children}
    </GameContext>
  )
}

export function useGame() {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error("useGame must be used within a GameProvider")
  return ctx
}
