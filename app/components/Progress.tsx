// $dot-size: 9px;
// $marker-size: 1.875em;
// $progress-transition-time: 200ms;
// $progress-transition: left $progress-transition-time ease;

// .sb-progress-rank-text-animation {
//   min-width: 5em;
//   position: relative;
//   display: flex;
// }

// .incoming-letter {
//   display: flex;
//   font-weight: 700;
//   align-items: center;
//   opacity: 0;
//   animation:
//     slow-bounce-up 173ms calc(383ms + (var(--letterIndex) * 77ms))
//       forwards,
//     slow-bounce-down 157ms
//       calc(383ms + (var(--letterIndex) * 77ms) + 173ms) forwards,
//     fade-out 67ms reverse calc(383ms + (var(--letterIndex) * 77ms))
//       forwards;
// }

// .rank-letter-container {
//   align-items: center;
//   display: flex;
//   position: relative;
// }

// .outgoing {
//   position: absolute;
//   top: 0;
//   left: 0;
//   animation:
//     slide-up 466ms cubic-bezier(0.42, 0, 0.83, 1) 267ms forwards,
//     fade-out 166ms linear 267ms forwards;
// }

// @keyframes fade-out {
//   0% {
//     opacity: 1;
//     visibility: visible;
//   }
//   100% {
//     opacity: 0;
//   }
// }

// @keyframes slide-up {
//   0% {
//     transform: translateY(0);
//   }
//   100% {
//     transform: translateY(-1.225em);
//     visibility: hidden;
//   }
// }

// @keyframes slow-bounce-up {
//   0% {
//     transform: translateY(0.525em);
//     animation-timing-function: cubic-bezier(0.14, 1, 0.1, 1);
//   }
//   100% {
//     transform: translateY(-0.3em);
//   }
// }

// @keyframes slow-bounce-down {
//   0% {
//     transform: translateY(-0.3em);
//     animation-timing-function: cubic-bezier(0.14, 1, 0.83, 0.92);
//   }
//   100% {
//     transform: translateY(0);
//   }
// }

// .sb-progress-bar,
// .sb-progress-rank,
// .sb-progress-rank-text-animation {
//   height: $marker-size;
// }

function ProgressDot({ isCompleted }: { isCompleted: boolean }) {
  return (
    <span
      className={[
        "block w-0 relative",
        "after:content-[''] after:block after:absolute after:left-[-4.5px] after:top-[-4.5px] after:w-[9px] after:h-[9px] after:rounded-full after:transition-colors after:duration-100",
        "last:after:rounded-none",
        isCompleted ? "after:bg-bg-sb" : "after:bg-text-sb-progress",
      ].join(" ")}
    ></span>
  )
}

export default function Progress() {
  const markerPosition = 50 // 100 // 37.5 // percentage
  const currentValue = 14
  const rank:
    | "Beginner"
    | "Good Start"
    | "Moving Up"
    | "Good"
    | "Solid"
    | "Nice"
    | "Great"
    | "Amazing" = "Solid"

  // TODO: animate rank change
  // 1. fade out old rank
  // 2. slide up old rank
  // 3. slide in new rank letters with staggered animation
  // 4. fade in new rank

  return (
    <div className="m-3 mb-0">
      <span role="presentation">
        <div className="flex flex-wrap items-center pr-3 sm:py-1.5 sm:pr-3">
          <h4 className="flex items-center min-w-[5em] font-bold">{rank}</h4>
          {/* <div className="sb-progress-rank-text-animation">
            <div className="rank-letter-container">
              <span className="incoming-letter">G</span>
              <span className="incoming-letter">o</span>
              <span className="incoming-letter">o</span>
              <span className="incoming-letter">d</span>
            </div>
          </div> */}
          <div className="flex grow relative min-w-[calc(100%_-_97px)] items-center ml-3 h-[1.875em]">
            <div className="relative h-px flex items-center w-full bg-text-sb-progress">
              <div className="w-full flex justify-between">
                <ProgressDot isCompleted={true} />
                <ProgressDot isCompleted={true} />
                <ProgressDot isCompleted={true} />
                <ProgressDot isCompleted={true} />
                <ProgressDot isCompleted={true} />
                <ProgressDot isCompleted={false} />
                <ProgressDot isCompleted={false} />
                <ProgressDot isCompleted={false} />
                <ProgressDot isCompleted={false} />
              </div>
            </div>
            <div
              className="sb-progress-marker w-[1.875em] h-[1.875em] absolute left-0 transition-transform duration-200 -translate-x-1/2"
              style={{ left: `${markerPosition}%` }}
            >
              <span
                className={[
                  "sb-progress-value absolute flex items-center justify-center h-full w-full text-constant bg-bg-sb text-[0.75em] font-medium tracking-[-0.03125em]",
                  markerPosition >= 100 ? "rounded-none" : "rounded-full",
                ].join(" ")}
              >
                {currentValue}
              </span>
            </div>
          </div>
        </div>
      </span>
    </div>
  )
}
