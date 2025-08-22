import Hive from "@/app/components/Hive"

export default function Controls() {
  return (
    <div className="flex flex-1 relative justify-center items-center">
      <div className="sb-controls relative max-h-full flex flex-col w-[80vw] max-w-[290px] z-[3] items-center pb-[calc(--spacing(1)*2.5)] xs:pb-[calc(--spacing(5)*2.25)]">
        <div className="sb-message-box" />
        <div className="sb-hive-input" />
        <Hive letters={["a", "b", "c", "d", "e", "f", "g"]} />
        <div className="hive-actions" />
      </div>
    </div>
  )
}
