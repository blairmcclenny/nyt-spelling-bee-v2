import Header from "@/app/components/Header"
import Toolbar from "@/app/components/Toolbar"
import Status from "@/app/components/Status"
import Controls from "@/app/components/Controls"
import { GameProvider } from "@/app/contexts/GameContext"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="pz-game-screen relative flex flex-col min-h-[550px]">
          <Toolbar />
          <div className="pz-game-field flex flex-col flex-[1_0_auto] @max-sm:size-full @max-sm:overflow-y-auto @max-sm:max-h-none @max-sm:min-h-initial @max-sm:p-0 @max-sm:mt-0">
            <div className="sb-content-box flex grow w-full h-full flex-col items-stretch md:flex-row-reverse md:max-w-[1080px] md:mx-auto">
              <GameProvider>
                <Status />
                <Controls />
              </GameProvider>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
