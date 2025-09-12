"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { games } from "@/app/data/mock"
import { getRanksUpToGenius } from "../utils/getRanksUpToGenius"
import { getTotalPoints } from "../utils/getTotalPoints"

type ShuffleState = "idle" | "fadingOut" | "shuffling" | "fadingIn"
type Message = {
  value: string
  points?: number
  isPangram?: boolean
  isError?: boolean
} | null

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
  shuffleState: ShuffleState
  setShuffleState: React.Dispatch<React.SetStateAction<ShuffleState>>
  message: Message | null
  setMessage: React.Dispatch<React.SetStateAction<Message | null>>
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
  rank: string
  rankIdx: number
  ranksUpToGenius: { minScore: number; title: string }[]
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
  shuffleState: "idle",
  setShuffleState: () => {},
  message: null,
  setMessage: () => {},
  score: 0,
  setScore: () => {},
  rank: "Beginner",
  rankIdx: 0,
  ranksUpToGenius: [],
})

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [game, setGame] = useState<null | (typeof games)[0]>(null)
  const [input, setInput] = useState<string[]>([])
  const [foundWords, setFoundWords] = useState<string[]>([])
  const [shuffleState, setShuffleState] = useState<ShuffleState>("idle")
  const [message, setMessage] = useState<Message | null>(null)
  const [score, setScore] = useState<number>(0)
  const [rankIdx, setRankIdx] = useState<number>(0)
  const [ranksUpToGenius, setRanksUpToGenius] = useState<
    { minScore: number; title: string }[]
  >([])

  useEffect(() => {
    setGame(games[Math.floor(Math.random() * games.length)])
  }, [])

  useEffect(() => {
    setRanksUpToGenius(
      getRanksUpToGenius(
        getTotalPoints({
          answers: game?.answers || [],
          pangrams: game?.pangrams || [],
        })
      )
    )
  }, [game])

  useEffect(() => {
    const newRankIdx = ranksUpToGenius.findIndex((rank, i) => {
      return (
        score >= rank.minScore &&
        (i === ranksUpToGenius.length - 1 ||
          score < ranksUpToGenius[i + 1].minScore)
      )
    })
    setRankIdx(newRankIdx === -1 ? 0 : newRankIdx)
  }, [score, ranksUpToGenius])

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
        shuffleState: shuffleState,
        setShuffleState: setShuffleState,
        message: message,
        setMessage: setMessage,
        score: score,
        setScore: setScore,
        rank: ranksUpToGenius[rankIdx]?.title || "Beginner",
        rankIdx: rankIdx,
        ranksUpToGenius: ranksUpToGenius,
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
