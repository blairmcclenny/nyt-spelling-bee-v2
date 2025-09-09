export default function Progress() {
  return (
    <div className="sb-progress-box">
      <span role="presentation">
        <div className="sb-progress">
          <h4 className="sb-progress-rank">Good</h4>
          <div className="sb-progress-bar">
            <div className="sb-progress-line">
              <div className="sb-progress-dots">
                <span className="sb-progress-dot completed"></span>
                <span className="sb-progress-dot completed"></span>
                <span className="sb-progress-dot completed"></span>
                <span className="sb-progress-dot"></span>
                <span className="sb-progress-dot"></span>
                <span className="sb-progress-dot"></span>
                <span className="sb-progress-dot"></span>
                <span className="sb-progress-dot"></span>
                <span className="sb-progress-dot"></span>
              </div>
            </div>
            <div className="sb-progress-marker" style={{ left: "37.5%" }}>
              <span className="sb-progress-value">14</span>
            </div>
          </div>
        </div>
      </span>
    </div>
  )
}
