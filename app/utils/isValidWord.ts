export default function isValidWord(
  word: string,
  letters: string[],
  validWords: Record<string, boolean>,
  foundWords: string[]
): boolean | { error: string } {
  if (word.length < 4) {
    return { error: "Too short" }
  }

  if (word.length > 18) {
    return { error: "Too long" }
  }

  if ([...word].filter((letter) => !letters.includes(letter)).length > 0) {
    return { error: "Bad letters" }
  }

  if (!word.includes(letters[0])) {
    return { error: "Missing center letter" }
  }

  if (foundWords.includes(word)) {
    return { error: "Already found" }
  }

  if (validWords[word] !== true) {
    return { error: "Not in word list" }
  }

  return true
}
