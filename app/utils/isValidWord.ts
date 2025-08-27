export default function isValidWord(
  word: string,
  validWords: Record<string, boolean>
) {
  return validWords[word] === true
}
