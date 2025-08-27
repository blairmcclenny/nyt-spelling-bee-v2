export default function isPangram(word: string, letters: string[]) {
  return [...word].every((letter) => letters.includes(letter))
}
