// $altitude-ratio: 1.73205080757; // sqrt(3)
// $totalWidth: 290px;
// $hive-padding-ratio: ((3 * $altitude-ratio) * 0.2) * 100%;
// $shuffleTransitionTime: 0.3s; // This should match shuffleTransitionTime in Hive.js

// @mixin hive-cell() {
//   .cell-fill {
//     cursor: pointer;
//     fill: var(--bg-tile-sb);
//     transition: all 100ms;
//     &.push-active {
//       fill: var(--bg-tile-sb);
//     }
//   }
// }

// .hive {

//   .cell-letter {
//     fill: var(--text);
//     font-weight: 700;
//     font-size: 1.875em;
//     text-anchor: middle;
//     text-transform: uppercase;
//     pointer-events: none;
//   }

//   &.shuffling {
//     .outer > .cell-letter {
//       opacity: 0;
//     }
//   }

//   &.fade-out {
//     .outer > .cell-letter {
//       opacity: 0;
//       transition: opacity $shuffleTransitionTime;
//     }
//   }

//   &.fade-in {
//     .outer > .cell-letter {
//       opacity: 1;
//       transition: opacity $shuffleTransitionTime;
//     }
//   }

//   &.revealed {
//     opacity: 0.5;
//   }
// }

// .hive-cell {

//   .cell-fill {
//     cursor: pointer;
//     fill: var(--bg-tile-sb);
//     stroke: var(--bg-page);
//     transition: all 100ms;
//     &.push-active {
//       fill: var(--bg-tile-sb);
//     }
//   }
//   &:first-child {
//     .cell-fill {
//       fill: var(--bg-sb);
//     }
//     .cell-letter {
//       fill: var(--text-constant);
//     }
//   }

//   > .cell-fill.push-active {
//     transform: scale3d(0.86, 0.86, 1);
//     transform-origin: center center;
//   }
// }

// @include view-width-max(xs) {
//   .sb-hive {
//     width: 70%;
//     margin: 4vh auto;
//   }

//   .hive {
//     .cell-letter {
//       font-size: 2.5em;
//     }
//   }
// }

function HiveCell({ position, letter }: { position: number; letter: string }) {
  const hexCoords = [
    [0, 0],
    [-75, -50],
    [0, -100],
    [75, -50],
    [75, 50],
    [0, 100],
    [-75, 50],
  ]

  const [x, y] = hexCoords[position]

  return (
    <svg
      className="absolute top-[calc(100%/3)] left-[30%] w-[40%] h-[calc(100%/3)]"
      style={{
        transform: `translate(${x}%, ${y}%)`,
      }}
      viewBox="0 0 120 103.92304845413263"
    >
      <polygon
        className="cell-fill"
        points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
      />
      <text className="cell-letter" x="50%" y="50%" dy="0.35em">
        {letter}
      </text>
    </svg>
  )
}

export default function Hive({
  letters = ["a", "b", "c", "d", "e", "f", "h"],
}: {
  letters: string[]
}) {
  return (
    <div className="w-[90%] mx-auto my-[calc(--spacing(5)*1.25)] select-none">
      <div className="relative w-full pb-[calc((3*1.73205080757*0.2)*100%)]">
        {letters.map((letter, i) => (
          <HiveCell key={letter} position={i} letter={letter} />
        ))}
      </div>
    </div>
  )
}
