"use client"

import { useGame } from "@/app/contexts/GameContext"

export default function Wordlist() {
  const { foundWords, pangrams } = useGame()

  return (
    <div className="sb-wordlist-box">
      <div className="sb-wordlist-heading">
        <div
          className="sb-wordlist-heading-wrap sb-touch-button"
          data-testid="touch-button"
        >
          <div className="sb-wordlist-summary">You have found 7 words</div>
          {/* <div className="sb-recent-words-wrap">
            <ul className="sb-recent-words sb-has-words">
              <li>
                <span className="sb-anagram">teat</span>
              </li>
              <li>
                <span className="sb-anagram">beat</span>
              </li>
              <li>
                <span className="sb-anagram">bite</span>
              </li>
              <li>
                <span className="sb-anagram">tack</span>
              </li>
              <li>
                <span className="sb-anagram">tick</span>
              </li>
              <li>
                <span className="sb-anagram">bait</span>
              </li>
              <li>
                <span className="sb-anagram">take</span>
              </li>
            </ul>
          </div> */}
          <div className="sb-toggle-expand">
            <span className="sb-toggle-icon"></span>
          </div>
        </div>
      </div>
      <div className="sb-wordlist-drawer">
        <div className="sb-wordlist-window">
          <div className="sb-wordlist-pag">
            <div className="sb-wordlist-scroll-anchor" style={{ left: "0%" }} />
            <ul className="sb-wordlist-items-pag">
              {foundWords.sort().map((word) => (
                <li
                  key={word}
                  className={[
                    "w-[calc(50%-20px)] border-b border-b-stroke-tertiary mb-1.5 mr-5 py-1 pl-px",
                    "md:w-[calc(50%-25px)] md:mr-6 lg:w-[calc(33.33%-25px)]",
                    pangrams.includes(word) ? "font-bold" : "",
                  ].join(" ")}
                >
                  <span className="sb-anagram capitalize">{word}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sb-kebob"></div>
        </div>
      </div>
    </div>
  )
}
