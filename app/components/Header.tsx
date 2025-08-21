export default function Header() {
  return (
    <header className="pt-6">
      <div className="pz-row pz-game-title-bar flex flex-wrap items-stretch min-h-px flex-[1_1_0%] m-auto max-w-7xl p-6">
        <div className="pz-module">
          <h2>
            <em className="pz-game-title font-serif font-bold text-[37px] lg:text-[42px] mr-4 not-italic">
              Spelling Bee
            </em>
            <span className="pz-game-date text-[25px] lg:text-[28px] inline-block font-light">
              August 21, 2025
            </span>
          </h2>
        </div>
      </div>
    </header>
  )
}
