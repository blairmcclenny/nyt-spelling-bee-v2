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
      className="absolute top-[calc(100%/3)] left-[30%] w-[40%] h-[calc(100%/3)] fill-bg-tile-sb first:fill-bg-sb"
      style={{
        transform: `translate(${x}%, ${y}%)`,
      }}
      viewBox="0 0 120 103.92304845413263"
    >
      <polygon
        className="cursor-pointer stroke-bg-page transition-all duration-100 active:scale-[0.86] origin-center"
        points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
        strokeWidth={7.5}
      />
      <text
        className="fill-text font-bold text-[2.5em] xs:text-[1.875em] [text-anchor:middle] uppercase pointer-events-none"
        x="50%"
        y="50%"
        dy="0.35em"
      >
        {letter}
      </text>
    </svg>
  )
}

export default function Hive({ letters }: { letters: string[] }) {
  return (
    <div className="w-[70%] my-[4vh] xs:w-[90%] mx-auto xs:my-[calc(--spacing(5)*1.25)] select-none">
      <div className="relative w-full pb-[calc((3*1.73205080757*0.2)*100%)]">
        {letters.map((letter, i) => (
          <HiveCell key={letter} position={i} letter={letter} />
        ))}
      </div>
    </div>
  )
}
