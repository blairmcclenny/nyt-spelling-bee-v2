"use client"

import { useEffect } from "react"
import { useGame } from "@/app/contexts/GameContext"
import useKeyPress from "@/app/hooks/useKeyPress"
import MessageBox from "@/app/components/MessageBox"
import HiveInput from "@/app/components/HiveInput"
import Hive from "@/app/components/Hive"
import HiveActions from "@/app/components/HiveActions"

export default function Controls() {
  const { setInput } = useGame()
  const keyPress = useKeyPress()

  const handleHiveCellClick = (letter: string) => {
    const ch = letter.toLowerCase()
    setInput((prev) => [...prev, ch])
  }

  useEffect(() => {
    if (!keyPress) return

    if (keyPress.type === "letter") {
      handleHiveCellClick(keyPress.value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPress])

  return (
    <div className="flex flex-1 relative justify-center items-center">
      <div className="sb-controls relative max-h-full flex flex-col w-[80vw] max-w-[290px] z-[3] items-center pb-[calc(--spacing(1)*2.5)] xs:pb-[calc(--spacing(5)*2.25)]">
        <MessageBox />
        <HiveInput />
        <Hive />
        <HiveActions />
      </div>
    </div>
  )
}
