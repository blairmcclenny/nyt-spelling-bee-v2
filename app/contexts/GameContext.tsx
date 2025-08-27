"use client"

import { createContext, useContext } from "react"
import { dictionary } from "@/app/data/dictionary"

const GameContext = createContext<{
  letters: string[]
  validWords: Record<string, boolean>
  foundWords: string[]
  score: number
}>({
  letters: [],
  validWords: {},
  foundWords: [],
  score: 0,
})

export function GameProvider({ children }: { children: React.ReactNode }) {
  return (
    <GameContext
      value={{
        letters: ["d", "e", "f", "i", "u", "h", "m"],
        validWords: dictionary,
        foundWords: [],
        score: 0,
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
