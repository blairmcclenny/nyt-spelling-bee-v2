// .sb-message {
//   display: inline-block;
//   position: relative;
//   padding: calc(var(--vertical-spacing-0-5) * 2)
//     calc(var(--horizontal-spacing-0-5) * 3.5);
//   border-radius: 3px;
//   bottom: 10px;
//   font-size: 0.875em;
//   color: var(--text-constant);
//   background: var(--bg-toast-alternate-constant);
//   border: solid 1px var(--stroke-tertiary);
//   min-width: 65px;

//   transform: translateZ(0);
//   backface-visibility: hidden;
//   perspective: 1000;
// }

// .success-message .sb-message {
//   white-space: nowrap;
//   opacity: 0;
//   animation: 780ms pop cubic-bezier(0.375, 0.25, 0.315, 0.89);
// }

// .error-message .sb-message {
//   opacity: 0;
//   animation: 1100ms fade-show cubic-bezier(0.375, 0.25, 0.315, 0.89);
//   background: var(--bg-toast-sb-error);
//   color: var(--text-alternate-constant);
//   border: none;
// }

// .pangram-message .sb-message {
//   background: var(--bg-sb);
//   color: var(--text-constant);
//   border: none;
// }

// .sb-message-points {
//   display: block;
//   position: absolute;
//   bottom: 10px;
//   right: -36px;
//   opacity: 0;
//   font-weight: 700;
//   animation: 790ms float cubic-bezier(0.375, 0.25, 0.315, 0.89);
// }

export default function MessageBox({
  message,
  type,
  points,
}: {
  message: string
  type: "success" | "error" | "pangram"
  points: number
}) {
  return (
    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-center">
      <span
        className={`inline-block relative py-2 px-3.5 rounded-[3px] bottom-2.5 text-[0.875em] text-text-constant bg-bg-toast-alternate-constant border border-stroke-tertiary min-w-[65px] transform-gpu backface-hidden perspective-distant ${
          type === "success" || type === "pangram"
            ? "whitespace-nowrap opacity-0 animate-pop"
            : ""
        } ${
          type === "error"
            ? "opacity-0 animate-fade-show bg-bg-toast-sb-error text-text-alternate-constant border-none"
            : ""
        } ${
          type === "pangram" ? "bg-bg-sb text-text-constant border-none" : ""
        }`}
      >
        {message}
      </span>
      <span className="block absolute bottom-2.5 -right-9 opacity-0 font-bold animate-float">
        +{points}
      </span>
    </div>
  )
}
