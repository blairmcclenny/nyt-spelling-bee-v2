import { describe, it, expect } from "vitest"
import shuffle from "./shuffle"

function sortedCopy<T>(arr: T[]) {
  return [...arr].sort()
}

describe("shuffle (Fisher–Yates)", () => {
  it("returns a new array (does not return the same reference)", () => {
    const input = ["a", "l", "d", "h"]
    const result = shuffle(input)
    expect(result).not.toBe(input)
  })

  it("does not mutate the input array", () => {
    const input = ["a", "l", "d", "h"]
    const snapshot = [...input]
    void shuffle(input)
    expect(input).toEqual(snapshot)
  })

  it("preserves all elements (same multiset, possibly different order)", () => {
    const input = ["a", "l", "d", "h"]
    const result = shuffle(input)
    expect(sortedCopy(result)).toEqual(sortedCopy(input))
  })

  it("usually changes order (sanity check across multiple runs)", () => {
    const input = ["a", "l", "d", "h"]
    const trials = 50
    let sawDifferent = false

    for (let t = 0; t < trials; t++) {
      const out = shuffle(input)

      if (out.some((v, i) => v !== input[i])) {
        sawDifferent = true
        break
      }
    }

    expect(sawDifferent).toBe(true)
  })

  it("each element can appear in at least one different index across runs", () => {
    const input = ["a", "l", "d", "h"]
    const n = input.length
    const trials = 200
    const movedFromIndex = new Array(n).fill(false)

    for (let t = 0; t < trials; t++) {
      const out = shuffle(input)

      for (let i = 0; i < n; i++) {
        if (out[i] !== input[i]) movedFromIndex[i] = true
      }

      if (movedFromIndex.every(Boolean)) break
    }

    expect(movedFromIndex.every(Boolean)).toBe(true)
  })

  it("produces more than one distinct permutation over many runs", () => {
    const input = ["a", "l", "d", "h"]
    const trials = 100
    const seen = new Set<string>()

    for (let t = 0; t < trials; t++) {
      const out = shuffle(input)
      seen.add(out.join(""))
    }

    expect(seen.size).toBeGreaterThan(1)
  })
})
