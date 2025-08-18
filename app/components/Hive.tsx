// /* stylelint-disable custom/playbook-spacing-rules */

// @import 'shared/scss-helpers/index.scss';

// $altitude-ratio: 1.73205080757; // sqrt(3)
// $totalWidth: 290px;
// $hive-padding-ratio: ((3 * $altitude-ratio) * 0.2) * 100%;
// $shuffleTransitionTime: 0.3s; // This should match shuffleTransitionTime in Hive.js

// .sb-controls {
//   width: 80vw;
//   max-width: $totalWidth;
//   z-index: 3;
//   padding-bottom: calc(var(--vertical-spacing-2-5) * 2.25);
// }

// .sb-hive {
//   width: 90%;
//   margin: calc(var(--vertical-spacing-2-5) * 1.25) auto;
//   -webkit-tap-highlight-color: var(--transparent);
//   user-select: none;
// }

// @mixin hive-cell() {
//   .cell-fill {
//     cursor: pointer;
//     fill: var(--bg-tile-sb);
//     transition: all 100ms;
//     &.push-active {
//       fill: var(--bg-tile-sb);
//     }
//   }
// }

// .hive {
//   position: relative;
//   width: 100%;
//   padding-bottom: $hive-padding-ratio;

//   .cell-letter {
//     fill: var(--text);
//     font-weight: 700;
//     font-size: 1.875em;
//     text-anchor: middle;
//     text-transform: uppercase;
//     pointer-events: none;
//   }

//   &.shuffling {
//     .outer > .cell-letter {
//       opacity: 0;
//     }
//   }

//   &.fade-out {
//     .outer > .cell-letter {
//       opacity: 0;
//       transition: opacity $shuffleTransitionTime;
//     }
//   }

//   &.fade-in {
//     .outer > .cell-letter {
//       opacity: 1;
//       transition: opacity $shuffleTransitionTime;
//     }
//   }

//   &.revealed {
//     opacity: 0.5;
//   }
// }

// .hive-cell {
//   position: absolute;
//   top: calc(100% / 3);
//   left: 30%;
//   width: 40%;
//   height: calc(100% / 3);

//   .cell-fill {
//     cursor: pointer;
//     fill: var(--bg-tile-sb);
//     stroke: var(--bg-page);
//     transition: all 100ms;
//     &.push-active {
//       fill: var(--bg-tile-sb);
//     }
//   }
//   &:first-child {
//     .cell-fill {
//       fill: var(--bg-sb);
//     }
//     .cell-letter {
//       fill: var(--text-constant);
//     }
//   }

//   > .cell-fill.push-active {
//     transform: scale3d(0.86, 0.86, 1);
//     transform-origin: center center;
//   }
// }

// $hexcoords: (
//   (0, 0),
//   (-75%, -50%),
//   (0, -100%),
//   (75%, -50%),
//   (75%, 50%),
//   (0, 100%),
//   (-75%, 50%)
// );

// @for $i from 1 to 8 {
//   .hive-cell:nth-child(#{$i}) {
//     transform: translate(
//       nth(nth($hexcoords, $i), 1),
//       nth(nth($hexcoords, $i), 2)
//     );
//   }
// }

// .hive-actions {
//   text-align: center;
//   @include flexbox(row, flex-start);

//   .hive-action__delete {
//     order: 1;
//   }

//   .hive-action__shuffle {
//     order: 2;
//   }

//   .hive-action__submit {
//     order: 3;
//   }

//   &.vertical {
//     display: block;

//     .hive-action {
//       margin: 0 auto var(--vertical-spacing-1);
//     }
//   }
// }

// .hive-action {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: calc(var(--vertical-spacing-1-5) * 1.25) 0;
//   width: 5.5em;
//   min-width: 5.5em;
//   height: 3em;
//   background-color: var(--transparent);
//   font-size: 1em;
//   margin: 0 var(--horizontal-spacing-1);
//   color: var(--text);
//   border: 1px solid var(--stroke-tertiary);
//   border-radius: 2.5em;
//   letter-spacing: 0.01em;
//   user-select: none;

//   cursor: pointer;

//   &.push-active,
//   &.action-active {
//     background-color: var(--bg-tile-sb);
//   }

//   &__shuffle {
//     background: url('/public/assets/shuffle.svg') center no-repeat;
//     background-size: 60%;
//     height: 3em;
//     width: 3em;
//     min-width: 3em;

//     [data-mode='dark'].display-settings-enabled & {
//       background: url('/public/assets/shuffle-dark.svg') center
//         no-repeat;
//       background-size: 60%;

//       &.push-active {
//         background-color: var(--bg-tile-sb);
//       }
//     }
//   }
// }

// .sb-hive-play-past-puzzles {
//   width: 100%;
//   position: relative;

//   button {
//     width: 100%;
//   }

//   button + button {
//     margin-top: calc(var(--vertical-spacing-0-5) * 2.5);
//   }

//   [data-mode='dark'].display-settings-enabled & {
//     button {
//       background-color: var(--transparent);
//       border-color: var(--stroke);
//       color: var(--text);
//     }
//   }
// }

// @include view-width-max(xs) {
//   .sb-hive {
//     width: 70%;
//     margin: 4vh auto;
//   }

//   .hive {
//     .cell-letter {
//       font-size: 2.5em;
//     }
//   }

//   .sb-controls {
//     padding-bottom: calc(var(--vertical-spacing-0-5) * 2.5);
//   }
// }

export default function Hive() {
  return (
    <div className="sb-hive" data-testid="hive">
      <div className="hive">
        <svg
          className="hive-cell center"
          viewBox="0 0 120 103.92304845413263"
          data-testid="hive-cell-center"
        >
          <polygon
            className="cell-fill"
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            stroke-width="7.5"
            data-testid="cell-fill"
          ></polygon>
          <text
            className="cell-letter"
            x="50%"
            y="50%"
            dy="0.35em"
            data-testid="cell-letter"
          >
            c
          </text>
        </svg>
        <svg
          className="hive-cell outer"
          viewBox="0 0 120 103.92304845413263"
          data-testid="hive-cell-outer"
        >
          <polygon
            className="cell-fill"
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            stroke-width="7.5"
            data-testid="cell-fill"
          ></polygon>
          <text
            className="cell-letter"
            x="50%"
            y="50%"
            dy="0.35em"
            data-testid="cell-letter"
          >
            e
          </text>
        </svg>
        <svg
          className="hive-cell outer"
          viewBox="0 0 120 103.92304845413263"
          data-testid="hive-cell-outer"
        >
          <polygon
            className="cell-fill"
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            stroke-width="7.5"
            data-testid="cell-fill"
          ></polygon>
          <text
            className="cell-letter"
            x="50%"
            y="50%"
            dy="0.35em"
            data-testid="cell-letter"
          >
            d
          </text>
        </svg>
        <svg
          className="hive-cell outer"
          viewBox="0 0 120 103.92304845413263"
          data-testid="hive-cell-outer"
        >
          <polygon
            className="cell-fill"
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            stroke-width="7.5"
            data-testid="cell-fill"
          ></polygon>
          <text
            className="cell-letter"
            x="50%"
            y="50%"
            dy="0.35em"
            data-testid="cell-letter"
          >
            t
          </text>
        </svg>
        <svg
          className="hive-cell outer"
          viewBox="0 0 120 103.92304845413263"
          data-testid="hive-cell-outer"
        >
          <polygon
            className="cell-fill"
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            stroke-width="7.5"
            data-testid="cell-fill"
          ></polygon>
          <text
            className="cell-letter"
            x="50%"
            y="50%"
            dy="0.35em"
            data-testid="cell-letter"
          >
            b
          </text>
        </svg>
        <svg
          className="hive-cell outer"
          viewBox="0 0 120 103.92304845413263"
          data-testid="hive-cell-outer"
        >
          <polygon
            className="cell-fill"
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            stroke-width="7.5"
            data-testid="cell-fill"
          ></polygon>
          <text
            className="cell-letter"
            x="50%"
            y="50%"
            dy="0.35em"
            data-testid="cell-letter"
          >
            a
          </text>
        </svg>
        <svg
          className="hive-cell outer"
          viewBox="0 0 120 103.92304845413263"
          data-testid="hive-cell-outer"
        >
          <polygon
            className="cell-fill"
            points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
            stroke="white"
            stroke-width="7.5"
            data-testid="cell-fill"
          ></polygon>
          <text
            className="cell-letter"
            x="50%"
            y="50%"
            dy="0.35em"
            data-testid="cell-letter"
          >
            i
          </text>
        </svg>
      </div>
    </div>
  )
}
