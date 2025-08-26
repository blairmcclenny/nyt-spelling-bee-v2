import Header from "@/app/components/Header"
import Controls from "@/app/components/Controls"
import { GameProvider } from "@/app/GameContext"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <GameProvider>
          <Controls />
        </GameProvider>
      </main>
    </>
  )
}
