import isPangram from "./isPangram"
import isValidWord from "./isValidWord"

export default function evaluateWord(
  word: string,
  letters: string[],
  validWords: Record<string, boolean>,
  foundWords: string[]
):
  | { status: "invalid"; error: string; points: null }
  | { status: "valid"; error: null; points: number }
  | { status: "pangram"; error: null; points: number } {
  if (!word) {
    return { status: "invalid", error: "Empty input", points: null }
  }

  if (!isValidWord(word, letters, validWords, foundWords)) {
    return { status: "invalid", error: "Not in word list", points: null }
  }

  const points = word.length === 4 ? 1 : word.length

  if (isPangram(word, letters)) {
    return { status: "pangram", error: null, points: points + 7 }
  }

  return { status: "valid", error: null, points }
}
