"use client"

import { createContext, useContext } from "react"
import { games } from "@/app/data/mock"

const GameContext = createContext<{
  centerLetter: string
  outerLetters: string[]
  validLetters: string[]
  pangrams: string[]
  answers: string[]
  input: string[]
  foundWords: string[]
  message: string | null
}>({
  centerLetter: "",
  outerLetters: [],
  validLetters: [],
  pangrams: [],
  answers: [],
  input: [],
  foundWords: [],
  message: null,
})

export function GameProvider({ children }: { children: React.ReactNode }) {
  const currentGame = games[0] // TODO: implement game selection logic (randomize)

  return (
    <GameContext
      value={{
        centerLetter: currentGame.centerLetter,
        outerLetters: currentGame.outerLetters,
        validLetters: currentGame.validLetters,
        pangrams: currentGame.pangrams,
        answers: currentGame.answers,
        input: [],
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
