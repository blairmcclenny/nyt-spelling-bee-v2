"use client"

import { createContext, useContext, useEffect, useState } from "react"
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
  const [game, setGame] = useState<null | (typeof games)[0]>(null)
  const [input, setInput] = useState<string[]>([])

  useEffect(() => {
    setGame(games[Math.floor(Math.random() * games.length)])
  }, [])

  if (!game) return null

  return (
    <GameContext
      value={{
        centerLetter: game.centerLetter,
        outerLetters: game.outerLetters,
        validLetters: game.validLetters,
        pangrams: game.pangrams,
        answers: game.answers,
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
