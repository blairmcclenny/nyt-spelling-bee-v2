import isPangram from "@/app/utils/isPangram"
import isValidWord from "@/app/utils/isValidWord"

// {value: <string>, points: number, isPangram: boolean}
// (value: <string>, isError: boolean)

type EvaluateWord =
  | { status: "invalid"; message: string; points: null }
  | { status: "valid"; message: string; points: number }
  | { status: "pangram"; message: string; points: number }

export default function evaluateWord(
  word: string,
  letters: string[],
  validWords: Record<string, boolean>,
  foundWords: string[]
): EvaluateWord {
  if (!word) {
    return { status: "invalid", message: "Empty input", points: null }
  }

  if (!isValidWord(word, letters, validWords, foundWords)) {
    return { status: "invalid", message: "Not in word list", points: null }
  }

  const points = word.length === 4 ? 1 : word.length

  if (isPangram(word, letters)) {
    return {
      status: "pangram",
      message: "Pangram!",
      points: points + 7,
    }
  }

  return {
    status: "valid",
    message: points >= 7 ? "Awesome!" : points > 1 ? "Nice!" : "Good!",
    points,
  }
}
