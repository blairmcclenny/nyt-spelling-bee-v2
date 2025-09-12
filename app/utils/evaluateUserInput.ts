type Result = {
  value:
    | "Bad letters"
    | "Missing center letter"
    | "Not in word list"
    | "Already found"
    | "Too short"
    | "Too long"
    | "Empty input"
    | "Good!"
    | "Nice!"
    | "Awesome!"
    | "Pangram!"
  isError?: boolean
  points?: number // not null or undefined if isError is true
  isPangram?: boolean
}

const MAX_LENGTH = 18
const MIN_LENGTH = 4

export default function evaluateUserInput(
  input: string,
  centerLetter: string,
  validLetters: string[],
  pangrams: string[],
  answers: string[],
  foundWords: string[]
): Result {
  if (!input) return { value: "Empty input", isError: true }
  if (input.length < MIN_LENGTH) return { value: "Too short", isError: true }
  if (input.length > MAX_LENGTH) return { value: "Too long", isError: true }

  if ([...input].some((letter) => !validLetters.includes(letter))) {
    return { value: "Bad letters", isError: true }
  }

  if (!input.includes(centerLetter)) {
    return { value: "Missing center letter", isError: true }
  }

  if (!answers.includes(input)) {
    return { value: "Not in word list", isError: true }
  }

  if (foundWords.includes(input)) {
    return { value: "Already found", isError: true }
  }

  const isPangram = pangrams.includes(input)
  const size = input.length
  const points = size === 4 ? 1 : !isPangram ? size : size + 7

  if (isPangram) return { value: "Pangram!", points, isPangram: true }
  if (size === 4) return { value: "Good!", points, isPangram: false }
  if (size >= 7) return { value: "Awesome!", points, isPangram: false }

  return { value: "Nice!", points, isPangram: false }
}
