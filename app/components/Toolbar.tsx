export default function Toolbar() {
  // TODO - functionality (how to play modal)

  return (
    <div className="max-md:border-t-stroke border-t border-b border-stroke-tertiary">
      <div className="flex flex-wrap items-stretch min-h-px flex-1 m-auto max-w-7xl px-3 md:px-6">
        <div className="flex flex-wrap justify-end flex-1 md:mx-3">
          <div>
            <span className="sb-tooltip-trigger">
              <span
                role="presentation"
                className="md:text-lg leading-11 inline-block md:pt-1.5 md:pb-1 px-2.5 md:px-[13px] text-text hover:cursor-pointer hover:bg-bg-toolbar-selected transition-colors"
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
