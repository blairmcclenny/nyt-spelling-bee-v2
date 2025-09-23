import { X } from "lucide-react"
import { createPortal } from "react-dom"

export default function HowToPlay({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) {
  return createPortal(
    <div className="sb-modal fixed inset-0 z-50 flex items-center justify-center">
      <div
        role="presentation"
        className={[
          "sb-modal-scrim absolute inset-0 z-50 bg-bg-scrim",
          isOpen
            ? "pointer-events-[all] opacity-100 transition-opacity duration-150"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div
          className={[
            "sb-modal-wrapper flex flex-row items-center justify-center flex-nowrap relative h-full z-10 overflow-y-auto pt-8 text-text",
            isOpen
              ? "opacity-100 scale-100 overflow-hidden transition-all duration-150"
              : "opacity-0 scale-90 overflow-auto",
          ].join(" ")}
        >
          <div
            className="fixed inset-0 cursor-default"
            onClick={() => setIsOpen(false)}
          />
          <div
            role="button"
            className={[
              "sb-modal-frame bg-bg-modal flex flex-col items-start rounded-lg shadow-sm w-full my-auto absolute top-7 bottom-0 text-center",
              "md:top-0 md:relative md:w-[540px] md:h-auto md:max-h-[615px] md:shadow-md",
              "lg:w-[667px] lg:max-h-[615px] lg:shadow-lg",
            ].join(" ")}
          >
            <div className="sb-modal-top flex justify-end w-full min-h-[42px] items-end">
              <div
                role="button"
                className="sb-modal-close cursor-pointer mr-5"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </div>
            </div>
            <div
              className={[
                "sb-modal-content has-overflow flex flex-col items-start text-left w-full max-w-full h-full overflow-y-auto transition-all duration-150",
                "md:max-h-[600px]",
                "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-1px] after:h-[100px] after:bg-gradient-to-b after:from-transparent after:via-[color-mix(in_srgb,theme('colors.bg-modal'),transparent_20%)] after:to-bg-modal after:opacity-100 after:pointer-events-none",
              ].join(" ")}
            >
              <div className="sb-modal-header px-8 md:px-11 lg:px-14 mb-3 w-full">
                <h3 className="sb-modal-title max-w-full mt-1 leading-[1.0714] text-[1.75em] font-serif font-bold md:text-[2em] md:leading-[1.0625] lg:text-[2.125em] lg:leading-[1.0588]">
                  How to Play Spelling Bee
                </h3>
                <h4 className="sb-modal-subtitle font-medium font-sans text-[1.25em] leading-[1.2] mt-2 md:text-[1.5em] md:leading-[1.1667] lg:text-[1.625em] lg:leading-[1.1538]">
                  Create words using letters from the hive.
                </h4>
              </div>
              <div className="sb-modal-body w-full px-8 md:px-11 lg:pl-14 lg:pr-40 pb-11 mt-3 flex flex-col">
                <ul className="sb-modal-list w-[calc(100%-20px)] list-disc leading-[1.4] ml-5 mb-2">
                  <li>Words must contain at least 4 letters.</li>
                  <li>Words must include the center letter.</li>
                  <li>
                    Our word list does not include words that are obscure,
                    hyphenated, or proper nouns.
                  </li>
                  <li>No cussing either, sorry.</li>
                  <li>Letters can be used more than once.</li>
                </ul>
                <h4 className="sb-modal-heading mb-2 font-bold mt-2">
                  Score points to increase your rating.
                </h4>
                <ul className="sb-modal-list w-[calc(100%-20px)] list-disc leading-[1.4] ml-5">
                  <li>4-letter words are worth 1 point each.</li>
                  <li>Longer words earn 1 point per letter.</li>
                  <li>
                    Each puzzle includes at least one “pangram” which uses every
                    letter. These are worth 7 extra points!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
