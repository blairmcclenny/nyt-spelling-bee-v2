// $caret-gap: 6px;
// $caret-width: 2px;

// @keyframes blink {
//   from,
//   to {
//     opacity: 1;
//   }
//   50% {
//     opacity: 0;
//   }
// }

// @keyframes shake {
//   20% {
//     transform: translate3d(-1px, 0, 0);
//   }
//   40% {
//     transform: translate3d(2px, 0, 0);
//   }
//   60% {
//     transform: translate3d(-1px, 0, 0);
//   }
//   80% {
//     transform: translate3d(2px, 0, 0);
//   }
// }

// .sb-hive-input-content {
//   height: 100%;
//   display: inline-block;
//   position: relative;
//   transform: translateY(0%);
//   min-width: 1px;

//   &.has-error {
//     animation: shake 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
//   }

//   &::after {
//     content: '';
//     display: block;
//     position: absolute;
//     top: 0;
//     width: $caret-width;
//     height: 1.25em;
//     background: var(--bg-sb);
//     animation: 1000ms blink step-end infinite;
//   }

//   &.non-empty::after {
//     right: -($caret-gap - $caret-width);
//   }

//   &.reduced-motion::after {
//     animation: none;
//   }

//   span.sb-hive-input-placeholder {
//     font-weight: $weight-medium;
//     color: var(--text–secondary-subdued);
//     text-transform: none;
//     letter-spacing: 0;
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

// .sb-input-bright {
//   color: var(--bg-sb);
// }

// .sb-input-invalid {
//   color: var(--stroke-tertiary);
// }

export default function HiveInput({ input }: { input: string }) {
  return (
    <div className="uppercase font-bold tracking-tight [text-rendering:optimizeLegibility] leading-[1.25] h-[1.25em] w-full text-[1.6em] xs:text-[2em] pt-0.5 text-center relative">
      <span className="h-full inline-block relative translate-y-0 min-w-px after:content-[''] after:block after:absolute after:top-0 after:w-0.5 after:h-[1.25em] after:bg-bg-sb after:animate-pulse after:right-[-4px] empty:after:right-0">
        {[...input].map((letter: string, i: number) => (
          <span key={`${letter}${i}`} className="sb-input-invalid">
            {letter}
          </span>
        ))}
        {/* <span className="sb-input-invalid">h</span>
        <span className="sb-input-invalid">e</span>
        <span className="sb-input-invalid">l</span>
        <span className="sb-input-invalid">l</span>
        <span className="">o</span> */}
      </span>
      {/* <div className="sb-hive-hidden-input">
        <span className="sb-hive-input-content non-empty">
          <span className="sb-input-invalid">h</span>
          <span className="sb-input-invalid">e</span>
          <span className="sb-input-invalid">l</span>
          <span className="sb-input-invalid">l</span>
          <span className="">o</span>
        </span>
      </div> */}
    </div>
  )
}
