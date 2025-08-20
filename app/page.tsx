import Hive from "@/app/components/Hive"

export default function Home() {
  return (
    <div>
      <header>
        <h1>
          Spelling Bee <span>August 17, 2025</span>
        </h1>
      </header>
      <main>
        <div className="max-w-[290px]">
          <Hive letters={["a", "b", "c", "d", "e", "f", "h"]} />
        </div>
      </main>
    </div>
  )
}
