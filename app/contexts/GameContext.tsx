"use client"

import { createContext, useContext } from "react"
import { games } from "@/app/data/mock"

// {
//   "centerLetter": "l",
//   "outerLetters": [
//     "v",
//     "a",
//     "y",
//     "d",
//     "i",
//     "n"
//   ],
//   "validLetters": [
//     "l",
//     "a",
//     "d",
//     "i",
//     "n",
//     "v",
//     "y"
//   ],
//   "pangrams": [
//     "invalidly"
//   ],
//   "answers": [
//     "invalidly",
//     "allay",
//     "ally",
//     "anal",
//     "anally",
//     "annal",
//     "anvil",
//     "avail",
//     "avidly",
//     "daily",
//     "dally",
//     "dandily",
//     "daylily",
//     "dial",
//     "diddly",
//     "dill",
//     "dilly",
//     "dillydally",
//     "idly",
//     "idyl",
//     "idyll",
//     "illy",
//     "inlaid",
//     "inland",
//     "inlay",
//     "invalid",
//     "lady",
//     "laid",
//     "lain",
//     "lanai",
//     "land",
//     "landlady",
//     "lava",
//     "lily",
//     "livid",
//     "lividly",
//     "nail",
//     "naval",
//     "vainly",
//     "valid",
//     "validly",
//     "vandal",
//     "vanilla",
//     "vanillin",
//     "vial",
//     "villa",
//     "villain",
//     "villainy",
//     "vinyl",
//     "vividly"
//   ],
//   "input": ["k","j","h","k","j","h"],
//   "foundWords": [
//     "invalid"
//   ],
//   "message": null,
// }

const GameContext = createContext<{
  centerLetter: string
  validLetters: string[]
  outerLetters: string[]
  pangrams: string[]
  answers: string[]
  foundWords: string[]
}>({
  centerLetter: "",
  outerLetters: [],
  validLetters: [],
  pangrams: [],
  answers: [],
  foundWords: [],
})

export function GameProvider({ children }: { children: React.ReactNode }) {
  const currentGame = games[0]

  return (
    <GameContext
      value={{
        centerLetter: currentGame.centerLetter,
        outerLetters: currentGame.outerLetters,
        validLetters: currentGame.validLetters,
        pangrams: currentGame.pangrams,
        answers: currentGame.answers,
        foundWords: [],
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
