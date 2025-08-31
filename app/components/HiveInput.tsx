import { useEffect, useState } from "react"
import { useGame } from "@/app/contexts/GameContext"

// .sb-hive-input-content {
//   &.has-error {
//     animation: shake 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
//   }
// }

// .sb-hive-hidden-input {
//   overflow: hidden;
//   pointer-events: none;

//   .sb-hive-input-content {
//     visibility: hidden;
//   }
// }

// .sb-game-locked {
//   .sb-hive-input-content::after {
//     display: none;
//   }
// }

// TODO: Scale input content when overflowing

export default function HiveInput() {
  const { input, centerLetter, validLetters } = useGame()
  const [touched, setTouched] = useState(false)

  useEffect(() => {
    if (!touched && input.length > 0) setTouched(true)
  }, [input, touched])

  return (
    <div className="uppercase font-bold tracking-tight [text-rendering:optimizeLegibility] leading-[1.25] h-[1.25em] w-full text-[1.6em] xs:text-[2em] pt-0.5 text-center relative">
      <span
        className={`h-full inline-block relative translate-y-0 min-w-px after:content-[''] after:block after:absolute after:top-0 after:w-0.5 after:h-[1.25em] after:bg-bg-sb after:animate-blink motion-reduce:animate-none ${
          !touched ? "" : "after:right-[-4px]"
        } empty:after:right-0`}
      >
        {!touched ? (
          <span className="font-medium normal-case tracking-normal">
            Type or click
          </span>
        ) : (
          input.map((letter: string, i: number) => (
            <span
              key={`${letter}${i}`}
              className={`${
                validLetters.includes(letter)
                  ? letter === centerLetter
                    ? "text-bg-sb"
                    : "text-inherit"
                  : "text-stroke-tertiary"
              }`}
            >
              {letter}
            </span>
          ))
        )}
      </span>
    </div>
  )
}
