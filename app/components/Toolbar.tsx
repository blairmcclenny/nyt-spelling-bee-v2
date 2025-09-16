export default function Toolbar() {
  // TODO - mobile styling
  // TODO - functionality (how to play modal)
  // TODO - hide header on mobile view

  return (
    <div className="pz-game-toolbar border-t border-b border-stroke-tertiary">
      <div className="pz-row flex flex-wrap items-stretch min-h-px flex-1 m-auto max-w-7xl px-6">
        <div className="pz-module pz-flex-row pz-game-toolbar-content flex flex-wrap justify-end flex-1 mx-3">
          <div>
            <span
              className="Popover-module_popover__trigger__bbZnY sb-tooltip-trigger"
              data-state="closed"
              aria-expanded="false"
              aria-haspopup="dialog"
            >
              <span
                role="presentation"
                className="pz-toolbar-button text-lg leading-11 inline-block pt-1.5 px-[13px] pb-1 text-text hover:cursor-pointer hover:bg-bg-toolbar-selected transition-colors"
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
