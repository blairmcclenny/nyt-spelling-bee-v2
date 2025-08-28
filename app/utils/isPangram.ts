export default function isPangram(word: string, letters: string[]): boolean {
  return [...word].every((letter) => letters.includes(letter))
}
