export default function evaluateUserInput(
  input: string,
  centerLetter: string,
  validLetters: string[],
  pangrams: string[],
  answers: string[],
  foundWords: string[]
): { value: string; points?: number; isPangram?: boolean; isError?: boolean } {
  if (!input) {
    return { value: "Empty input", isError: true }
  }

  if (input.length < 4) {
    return { value: "Too short", isError: true }
  }

  if (input.length > 18) {
    return { value: "Too long", isError: true }
  }

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
  const points =
    input.length === 4 ? 1 : !isPangram ? input.length : input.length + 7
  const value = isPangram
    ? "Pangram!"
    : points >= 7
    ? "Awesome!"
    : points > 1
    ? "Nice!"
    : "Good!"

  return {
    value,
    points,
    isPangram,
  }
}
