export default function Toolbar() {
  // TODO - functionality (how to play modal)

  return (
    <div className="pz-game-toolbar max-md:border-t-stroke border-t border-b border-stroke-tertiary">
      <div className="pz-row flex flex-wrap items-stretch min-h-px flex-1 m-auto max-w-7xl px-3 md:px-6">
        <div className="pz-module pz-flex-row pz-game-toolbar-content flex flex-wrap justify-end flex-1 md:mx-3">
          <div>
            <span
              className="Popover-module_popover__trigger__bbZnY sb-tooltip-trigger"
              data-state="closed"
              aria-expanded="false"
              aria-haspopup="dialog"
            >
              <span
                role="presentation"
                className="pz-toolbar-button md:text-lg leading-11 inline-block md:pt-1.5 md:pb-1 px-2.5 md:px-[13px] text-text hover:cursor-pointer hover:bg-bg-toolbar-selected transition-colors"
              >
                How to Play
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
