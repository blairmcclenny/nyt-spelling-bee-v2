import Header from "@/app/components/Header"
import Hive from "@/app/components/Hive"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-[290px]">
          <Hive letters={["a", "b", "c", "d", "e", "f", "h"]} />
        </div>
      </main>
    </>
  )
}
