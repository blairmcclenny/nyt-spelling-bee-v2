export function getRanksUpToGenius(
  totalPoints: number
): { minScore: number; title: string }[] {
  const titles = [
    "Beginner",
    "Good Start",
    "Moving Up",
    "Good",
    "Solid",
    "Nice",
    "Great",
    "Amazing",
    "Genius",
  ]
  const ratios = [0, 0.038, 0.101, 0.177, 0.265, 0.363, 0.468, 0.581, 0.7]
  return ratios.map((x, i) => ({
    minScore: Math.floor(totalPoints * x),
    title: titles[i],
  }))
}
