type MessageBoxProps = {
  message: string
  points: number
  type: "success" | "error" | "pangram"
}

export default function MessageBox({ message, points, type }: MessageBoxProps) {
  return (
    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-center">
      <span
        className={`whitespace-nowrap inline-block relative opacity-0 py-2 px-3.5 rounded-[3px] bottom-2.5 text-[0.875em] min-w-[65px] transform-gpu backface-hidden perspective-distant ${
          type === "success" &&
          "text-text-constant bg-bg-toast-alternate-constant border border-stroke-tertiary animate-pop"
        } ${
          type === "error" &&
          "animate-fade-show bg-bg-toast-sb-error text-text-alternate-constant"
        } ${type === "pangram" && "bg-bg-sb text-text-constant animate-pop"}`}
      >
        {message}
      </span>
      {type !== "error" && (
        <span className="block absolute bottom-2.5 -right-9 opacity-0 font-bold animate-float">
          +{points}
        </span>
      )}
    </div>
  )
}
