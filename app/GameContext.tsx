"use client"

import { createContext, useContext } from "react"

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
        letters: ["a", "b", "c", "d", "e", "f", "g"],
        validWords: {},
        foundWords: [],
        score: 0,
      }}
    >
      {children}
    </GameContext>
  )
}

export function useGame() {
  return useContext(GameContext)
}
