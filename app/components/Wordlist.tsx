"use client"

import { useGame } from "@/app/contexts/GameContext"

export default function Wordlist() {
  const { foundWords, pangrams } = useGame()

  return (
    <div className="sb-wordlist-box m-3 tracking-[.005em] overflow-hidden rounded-md border border-stroke-tertiary md:flex md:flex-col">
      <div className="sb-wordlist-heading relative h-11 md:h-12 overflow-hidden">
        <div
          className="sb-wordlist-heading-wrap sb-touch-button md:pointer-events-none"
          data-testid="touch-button"
        >
          <div
            className={[
              "sb-wordlist-summary relative px-5 flex items-center -top-11 h-11 opacity-0 whitespace-nowrap text-ellipsis overflow-hidden",
              "md:h-12 md:top-0 md:opacity-100 md:px-6",
            ].join(" ")}
          >
            You have found {foundWords.length} words
          </div>
          <div className="sb-recent-words-wrap">
            <ul className="sb-recent-words sb-has-words">
              {foundWords.map((word) => (
                <li key={word}>
                  <span className="sb-anagram">{word}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sb-toggle-expand">
            <span className="sb-toggle-icon"></span>
          </div>
        </div>
      </div>
      <div className="sb-wordlist-drawer overflow-hidden max-h-0 transition-[max-height] duration-200 ease-in-out md:max-h-none md:flex md:flex-col">
        <div className="sb-wordlist-window relative overflow-hidden h-[calc(1vh*64)] md:max-h-none">
          <div className="sb-wordlist-pag relative flex h-full overflow-x-auto overflow-y-hidden z-0 snap-mandatory scrollbar-hide scroll-smooth overscroll-contain ml-5 md:ml-6">
            <div className="sb-wordlist-scroll-anchor" style={{ left: "0%" }} />
            <ul className="sb-wordlist-items-pag flex flex-col flex-wrap items-start h-[calc(100%-38px)] w-full pt-5 pb-6 md:pt-0">
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
