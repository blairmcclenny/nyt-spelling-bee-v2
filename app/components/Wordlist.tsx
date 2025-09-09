export default function Wordlist() {
  return (
    <div className="sb-wordlist-box">
      <div className="sb-wordlist-heading">
        <div className="sb-wordlist-heading-wrap sb-touch-button">
          <div className="sb-wordlist-summary">You have found 10 words</div>
          <div className="sb-recent-words-wrap">
            <ul className="sb-recent-words sb-has-words">
              <li>
                <span className="sb-anagram">gala</span>
              </li>
              <li>
                <span className="sb-anagram">palp</span>
              </li>
              <li>
                <span className="sb-anagram">alum</span>
              </li>
              <li>
                <span className="sb-anagram">glam</span>
              </li>
              <li>
                <span className="sb-anagram">maul</span>
              </li>
              <li>
                <span className="sb-anagram">laugh</span>
              </li>
              <li>
                <span className="sb-anagram">lamp</span>
              </li>
              <li>
                <span className="sb-anagram">palm</span>
              </li>
              <li>
                <span className="sb-anagram">hall</span>
              </li>
              <li>
                <span className="sb-anagram">gall</span>
              </li>
            </ul>
          </div>
          <div className="sb-toggle-expand">
            <span className="sb-toggle-icon"></span>
          </div>
        </div>
      </div>
      <div className="sb-wordlist-drawer">
        <div className="sb-wordlist-window">
          <div className="sb-wordlist-pag">
            <div
              className="sb-wordlist-scroll-anchor"
              style={{ left: "0%" }}
            ></div>
            <ul className="sb-wordlist-items-pag">
              <li>
                <span className="sb-anagram">alum</span>
              </li>
              <li>
                <span className="sb-anagram">gala</span>
              </li>
              <li>
                <span className="sb-anagram">gall</span>
              </li>
              <li>
                <span className="sb-anagram">glam</span>
              </li>
              <li>
                <span className="sb-anagram">hall</span>
              </li>
              <li>
                <span className="sb-anagram">lamp</span>
              </li>
              <li>
                <span className="sb-anagram">laugh</span>
              </li>
              <li>
                <span className="sb-anagram">maul</span>
              </li>
              <li>
                <span className="sb-anagram">palm</span>
              </li>
              <li>
                <span className="sb-anagram">palp</span>
              </li>
            </ul>
          </div>
          <div className="sb-kebob"></div>
        </div>
      </div>
    </div>
  )
}
