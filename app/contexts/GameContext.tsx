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
  setInput: React.Dispatch<React.SetStateAction<string[]>>
  foundWords: string[]
  setFoundWords: React.Dispatch<React.SetStateAction<string[]>>
  message: string | null
  setMessage: React.Dispatch<React.SetStateAction<string | null>>
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
}>({
  centerLetter: "",
  outerLetters: [],
  validLetters: [],
  pangrams: [],
  answers: [],
  input: [],
  setInput: () => {},
  foundWords: [],
  setFoundWords: () => {},
  message: null,
  setMessage: () => {},
  score: 0,
  setScore: () => {},
})

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [game, setGame] = useState<null | (typeof games)[0]>(null)
  const [input, setInput] = useState<string[]>([])
  const [foundWords, setFoundWords] = useState<string[]>([])
  const [message, setMessage] = useState<string | null>(null)
  const [score, setScore] = useState<number>(0)

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
        foundWords: foundWords,
        setFoundWords: setFoundWords,
        message: message,
        setMessage: setMessage,
        score: score,
        setScore: setScore,
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
