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

function getRandomStatus() {
  const statuses = ["text-inherit", "text-stroke-tertiary", "text-bg-sb"]
  return statuses[Math.floor(Math.random() * statuses.length)]
}

export default function HiveInput({ input }: { input: string }) {
  return (
    <div className="uppercase font-bold tracking-tight [text-rendering:optimizeLegibility] leading-[1.25] h-[1.25em] w-full text-[1.6em] xs:text-[2em] pt-0.5 text-center relative">
      <span className="h-full inline-block relative translate-y-0 min-w-px after:content-[''] after:block after:absolute after:top-0 after:w-0.5 after:h-[1.25em] after:bg-bg-sb after:animate-blink after:right-[-4px] motion-reduce:animate-none empty:after:right-0">
        {/* <span className="font-medium normal-case tracking-normal">
          Type or click
        </span> */}
        {[...input].map((letter: string, i: number) => (
          <span key={`${letter}${i}`} className={getRandomStatus()}>
            {letter}
          </span>
        ))}
      </span>
    </div>
  )
}
