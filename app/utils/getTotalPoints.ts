export function getTotalPoints({
  answers,
  pangrams,
}: {
  answers: string[]
  pangrams: string[]
}) {
  return answers.reduce((acc, word) => {
    if (word.length === 4) return acc + 1
    return acc + (word.length + (pangrams.includes(word) ? 7 : 0))
  }, 0)
}
