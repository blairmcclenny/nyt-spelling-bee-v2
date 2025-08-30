import { RefreshCcw } from "lucide-react"

export default function HiveActions({
  onDelete,
  onShuffle,
  onSubmit,
}: {
  onDelete: () => void
  onShuffle: () => void
  onSubmit: () => void
}) {
  return (
    <div className="text-center flex flex-row items-start justify-center flex-nowrap">
      <div
        className="order-3 flex justify-center items-center py-[15px] w-[5.5em] min-w-[5.5em] h-[3em] bg-bg-btn-standard text-base mx-2 text-text border border-stroke-tertiary rounded-[2.5em] tracking-[0.01em] select-none cursor-pointer active:bg-bg-tile-sb"
        onClick={onSubmit}
      >
        Enter
      </div>
      <div
        className="order-1 flex justify-center items-center py-[15px] w-[5.5em] min-w-[5.5em] h-[3em] bg-bg-btn-standard text-base mx-2 text-text border border-stroke-tertiary rounded-[2.5em] tracking-[0.01em] select-none cursor-pointer active:bg-bg-tile-sb"
        onClick={onDelete}
      >
        Delete
      </div>
      <div
        className="order-2 flex justify-center items-center py-[15px] w-[3em] min-w-[3em] h-[3em] bg-bg-btn-standard text-base mx-2 text-text border border-stroke-tertiary rounded-[2.5em] tracking-[0.01em] select-none cursor-pointer active:bg-bg-tile-sb"
        onClick={onShuffle}
      >
        <RefreshCcw strokeWidth={1.25} />
      </div>
    </div>
  )
}
