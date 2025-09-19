// /* stylelint-disable custom/playbook-spacing-rules */

import { X } from "lucide-react"
import { createPortal } from "react-dom"

// @import 'shared/scss-helpers/index.scss';
// @import 'shared/scss-helpers/spacing.scss';

// $outer-gutter: 50px;
// $inner-gutter: 25px;

// $outer-gutter-sm: 30px;
// $outer-gutter-xs: 20px;
// $inner-gutter-sm: 20px;

// $list-gutter: 20px;

// $transition-time: 150ms;

// %modal-open-state {
//   opacity: 1;
//   transform: translate(0, 0);
//   transition: all $transition-time;
// }
// %modal-closed-state {
//   opacity: 0;
//   transform: translate(0, 100%);
// }

// @mixin list-width($column-count, $column-width, $column-gap) {
//   column-count: $column-count;
//   column-gap: $column-gap;
//   column-width: calc(#{$column-width} - #{$column-gap});
// }

// $column-count-sm: 2;
// $column-count-md: 3;
// $column-gap: 25px;
// $column-width-sm: 7.5em;
// $column-width-lg: 10em;

// body.pz-games-sale-banner:not(.pz-sub) {
//   .sb-modal-scrim {
//     z-index: 201;
//   }
// }

// .sb-modal-scrim {
//   z-index: 101;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   pointer-events: none;
//   background-color: var(--bg-scrim);
//   opacity: 0;
//   transition: opacity $transition-time;

//   &:hover {
//     cursor: pointer;
//   }
// }

// .sb-modal-scrim.sb-modal-short {
//   display: flex;
//   flex-direction: column;
// }

// .pz-mobile.pz-play-tab,
// .pz-mobile.pz-newsreader.pz-ios {
//   .sb-modal-scrim {
//     // so that modals in the newsreader app appear above moments
//     // (moments are given a z-index of 200 there, see moments.scss)
//     z-index: 201;
//   }
// }

// .sb-modal-frame {
//   width: 100%;

//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   background: var(--bg-modal);
//   border-radius: 5px;
//   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.12);
//   cursor: default;
//   position: absolute;
//   top: 30px;
//   bottom: 0;
//   text-align: center;

//   // The auto margins help the scrolling behavior on tiny phones
//   // but cannot be added to left and right without breaking ie11
//   margin-top: auto;
//   margin-bottom: auto;

//   .sb-modal-short & {
//     top: unset;
//   }
// }

// .pz-games-app .sb-modal-frame {
//   font: -apple-system-body;
// }

// .sb-modal-frame.featureAwareness {
//   max-width: 440px;

//   @include phone {
//     max-width: 90%;
//   }

//   .sb-modal-top {
//     position: absolute;
//   }

//   .sb-modal-content > *:not(:last-child),
//   .sb-modal-content > *:not(:first-child) {
//     margin: 0;
//   }
// }

// @include view-width-max(md) {
//   .sb-modal-frame.featureAwareness {
//     position: relative;
//     top: 0px;
//   }
// }

// .sb-modal-top {
//   display: flex;
//   justify-content: flex-end;
//   width: 100%;
//   min-height: 42px;
//   align-items: flex-end;
// }

// .sb-modal-close {
//   cursor: pointer;
//   font: $weight-medium 1.75em/1 nyt-franklin;
//   margin-right: var(--horizontal-spacing-2-5);
// }

// .sb-modal-wrapper {
//   @include flexbox;
//   @extend %modal-closed-state;
//   position: relative;
//   height: 100%;
//   z-index: 2;
//   overflow-y: auto;
//   padding: $outer-gutter-sm * 0.5 0;
//   cursor: default;
//   color: var(--text);
// }

// .sb-modal-open {
//   .sb-modal-scrim {
//     pointer-events: all;
//     opacity: 1;
//   }
//   .sb-modal-wrapper {
//     @extend %modal-open-state;
//     padding: calc(var(--vertical-spacing-1-5) * 2.5) 0 0;
//     overflow: hidden;
//   }
// }

// .sb-modal-closing .sb-modal-wrapper {
//   @extend %modal-closed-state;
// }

// // utility class to add a white fade overlay to bottom of container
// // muse wrap element its applying fade to
// .sb-modal-overflow-fade {
//   position: relative;

//   // all child elements within overflow fade have reset z-index so fade is layered appropriately
//   * {
//     z-index: 0;
//   }

//   &::after {
//     // z-index needed to ensure it appears over any children within container
//     // that may have its own z-index set
//     z-index: 1;
//     content: '';
//     position: absolute;
//     height: 100px;
//     left: 0;
//     right: 0;
//     bottom: -1px;
//     background: linear-gradient(
//       180deg,
//       var(--transparent) 0%,
//       color-mix(in srgb, var(--bg-moment), var(--transparent) 20%)
//         56.65%,
//       var(--bg-moment) 100%
//     );
//   }
// }

// // utility class to add a white fade overlay to top of container
// .sb-modal-overflow-fade-top {
//   position: relative;

//   &::before {
//     // z-index needed to ensure it appears over any children within container
//     // that may have its own z-index set
//     z-index: 1;
//     content: '';
//     position: absolute;
//     height: 100px;
//     left: 0;
//     right: 0;
//     top: -1px;
//     background: linear-gradient(
//       0deg,
//       var(--transparent) 0%,
//       color-mix(in srgb, var(--bg-moment), var(--transparent) 20%)
//         56.65%,
//       var(--bg-moment) 100%
//     );
//   }
// }

// // -------------
// // MODAL CONTENT
// // -------------

// @mixin space-between-children($gutter) {
//   > * {
//     &:not(:first-child) {
//       margin-top: $gutter * 0.5;
//     }
//     &:not(:last-child) {
//       margin-bottom: $gutter * 0.5;
//     }
//   }
// }

// .sb-modal-content {
//   @include flexbox(column, flex-start, flex-start);

//   transition: all $transition-time;
//   font: $weight-medium 1em/1.5 nyt-franklin;
//   text-align: left;
//   width: 100%;
//   max-width: 100%;
//   height: 100%;
//   overflow-y: auto;

//   > * {
//     width: 100%;
//   } // For IE11

//   @include space-between-children($inner-gutter);
//   @include view-width-max(xs) {
//     @include space-between-children($inner-gutter-sm);
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: -1px;
//     height: 0;
//     background: linear-gradient(
//       180deg,
//       var(--transparent) 0%,
//       color-mix(in srgb, var(--bg-modal), var(--transparent) 20%)
//         56.65%,
//       var(--bg-modal) 100%
//     );
//     opacity: 0;
//     transition: all $transition-time;
//     pointer-events: none; // so that links underneath the fade are still clickable
//   }

//   &.has-overflow::after {
//     opacity: 1;
//     height: 100px;
//   }

//   .sb-modal-header {
//     padding: 0 var(--horizontal-spacing-4);
//   }

//   .sb-modal-body {
//     padding: 0 var(--horizontal-spacing-4)
//       calc(var(--vertical-spacing-5) * 1.1);
//     display: flex;
//     flex-direction: column;

//     @include space-between-children(16px);

//     .sb-modal-heading {
//       margin-bottom: 0;
//     }

//     .sb-modal-heading + .sb-modal-list {
//       margin-top: 0;
//     }

//     .sb-modal-buttons-container {
//       @include flexbox(row, center, flex-start);
//       margin-top: calc(var(--vertical-spacing-2-5) * 1.5);

//       :first-child {
//         margin-right: var(--horizontal-spacing-2-5);
//       }

//       button {
//         padding: 0.75rem 2rem;

//         &.button-primary {
//           background-color: var(--bg-btn-emphasis);
//           color: var(--text-alternate);
//         }
//         &.button-secondary {
//           background-color: var(--transparent);
//           color: var(--text);
//           border: 1px solid var(--stroke);

//           &.emphasis {
//             background-color: var(--bg-btn-emphasis);
//             color: var(--text-alternate);
//           }
//         }
//       }
//     }
//   }

//   .sb-modal-title {
//     font-weight: $weight-bold;
//     font-family: nyt-karnakcondensed;
//     @include font-size-clamp(1.75em, 68px);
//     line-height: 1.0714;
//     margin: var(--vertical-spacing-0-5) 0 0;
//     max-width: 100%;
//   }

//   .sb-modal-subtitle {
//     font-weight: $weight-medium;
//     font-family: nyt-karnak;
//     @include font-size-clamp(1.25em, 60px);
//     line-height: 1.2;
//     margin-top: var(--vertical-spacing-0-5);
//   }

//   .sb-modal-title + .sb-modal-message {
//     margin-top: var(--vertical-spacing-1);
//   }

//   .sb-modal-rank {
//     font-weight: $weight-bold;
//   }

//   .sb-modal-list li {
//     line-height: 1.25;
//     padding: calc(var(--vertical-spacing-0-5) / 2) 0;
//   }

//   .sb-modal-date__yesterday,
//   .sb-modal-date__answers {
//     margin-top: var(--vertical-spacing-1);
//     font: $weight-medium-bold 1em/1.25 nyt-franklin;
//     letter-spacing: 0.005em;
//     margin-bottom: var(--vertical-spacing-2-5);
//     max-width: 100%;

//     [data-mode='dark'].display-settings-enabled & {
//       .button-primary {
//         color: var(--text-constant);
//       }
//     }

//     @include view-width-max(md) {
//       margin-bottom: calc(var(--vertical-spacing-2-5) * 1.5);
//     }
//   }

//   .sb-modal-date__answers {
//     margin-bottom: 0;
//   }
// }

// .sb-modal-trophies {
//   // ensure trophies display underneath fixed header while scrolling
//   z-index: 0;
// }

// .yesterday {
//   .sb-modal-header {
//     margin-bottom: 0;
//   }

//   .sb-modal-body {
//     margin-top: 0;
//   }
// }

// .sb-modal-yesterday-rank,
// .sb-modal-today-rank {
//   padding: calc(var(--vertical-spacing-2) * (17 / 16)) 0;
//   border-top: 1px solid var(--text-secondary-inverse);
//   border-bottom: 1px solid var(--text-secondary-inverse);

//   p {
//     line-height: 1.2;
//   }
// }

// .sb-modal-yesterday-rank {
//   @include flexbox(row, center, flex-start);
// }

// // alignment change for today rank
// .sb-modal-today-rank {
//   @include flexbox(row, center, center);
// }

// .sb-modal-rank__icon {
//   width: 19px;
//   height: 13px;
//   margin-right: calc(var(--horizontal-spacing-0-5) * 2.5);
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-image: url('/public/assets/sb-stats-arrow.svg');

//   &.genius {
//     width: 28px;
//     height: 14px;
//     margin-bottom: calc(var(--vertical-spacing-0-5) * 0.75);
//     background-image: url('/public/assets/sb-stats-genius.svg');
//   }

//   &.queen-bee {
//     width: 19px;
//     height: 14px;
//     margin-bottom: calc(var(--vertical-spacing-0-5) * 0.75);
//     background-image: url('/public/assets/sb-stats-queen-bee.svg');
//   }
// }

// .sb-modal-content .sb-modal-body {
//   .sb-modal-yesterday-rank,
//   .sb-modal-today-rank {
//     margin-bottom: calc(calc(var(--vertical-spacing-2-5) * 1.5));

//     @include view-width-max(md) {
//       margin-bottom: var(--vertical-spacing-5);
//     }
//   }
// }

// .pz-moment__content {
//   .sb-modal-yesterday-rank,
//   .sb-modal-today-rank {
//     margin-bottom: calc(calc(var(--vertical-spacing-2-5) * 1.5));

//     @include view-width-max(md) {
//       margin-bottom: var(--vertical-spacing-5);
//     }
//   }
// }

// .pz-moment__congrats {
//   .pz-moment__content {
//     color: var(--text);
//     .pz-moment__button.secondary {
//       background: var(--transparent);
//       color: var(--text);
//       border: 1px solid var(--stroke);
//     }
//     .pz-moment__button.primary {
//       background: var(--bg-btn-emphasis);
//       color: var(--text-alternate);
//     }
//   }
// }

// .sb-modal-heading {
//   font-weight: $weight-bold;
// }

// .sb-modal-toggle {
//   padding: var(--vertical-spacing-4) 0;
// }

// ul.sb-modal-list {
//   line-height: 1.4;
//   list-style-type: disc;
//   margin-left: var(--horizontal-spacing-2-5);
//   width: calc(100% - #{$list-gutter}); // For IE11
// }

// .sb-modal-wordlist-items {
//   @include list-width(
//     $column-count-sm,
//     $column-width-sm,
//     $column-gap
//   );

//   li {
//     position: relative;
//     width: 100%;
//     break-inside: avoid-column;
//     border-bottom: 1px solid var(--stroke-tertiary);
//     line-height: 1.5;
//     letter-spacing: 0.005em;
//     padding-top: calc(var(--vertical-spacing-1) * 0.875);
//     padding-left: var(--horizontal-spacing-3);
//     $check-length: 17px;

//     .check {
//       user-select: none;
//       -webkit-user-select: none;
//       position: absolute;
//       left: 4px;
//       bottom: 0.2em;
//       width: $check-length * 0.5;
//       &.checked {
//         border: solid var(--bg-sb);
//         border-width: 0 3px 3px 0;
//         height: $check-length;
//         transform: rotate(45deg) translate(-3px, -3px);
//       }
//     }

//     .sb-anagram {
//       font-size: 1em;
//       &.pangram {
//         font-weight: $weight-bold;
//       }
//     }
//   }
// }

// .sb-modal-letters {
//   font-weight: $weight-extra-bold;
//   font-family: nyt-franklin;
//   @include font-size-clamp(1em, 50px);
//   line-height: 1.25;
//   letter-spacing: 0.4em;
//   margin-bottom: calc(var(--vertical-spacing-0-5) * 0.25);
//   text-transform: uppercase;

//   &::first-letter {
//     color: var(--bg-sb);
//   }
// }

// .sb-modal-letters--condensed {
//   font-weight: $weight-extra-bold;
//   font-family: nyt-franklin;
//   @include font-size-clamp(1em, 50px);
//   line-height: 1.25;
//   text-transform: uppercase;
// }

// .sb-modal-message {
//   line-height: 1.25;

//   a {
//     color: var(--text-accent);
//     text-decoration: none;

//     [data-mode='dark'].display-settings-enabled & {
//       &[href*='spellingbee-tips.html'] {
//         color: var(--text-alternate-constant);
//         text-decoration: underline;
//       }
//     }
//   }
// }

// .stats .sb-modal-content {
//   @include view-width-max(midsm) {
//     &.has-overflow::after {
//       opacity: 1;
//       height: 70px;
//     }
//   }
// }

// .sb-modal-message-container {
//   text-align: center;
//   max-width: 268px;
//   margin: 0px auto;

//   h3 {
//     font: $weight-bold 1.3em/1 'nyt-franklin';
//   }

//   p {
//     font: $weight-medium 20px/24px nyt-franklin;
//     padding: var(--vertical-spacing-2-5) 0;
//   }

//   .sb-modal-gray-text {
//     line-height: 1.25;
//     color: var(--dark-gray);
//   }

//   &.lifetime-stats {
//     margin: 0 0 calc(var(--vertical-spacing-2-5) * 2.5) 0;
//     max-width: 100%;

//     p {
//       margin: 0 calc(var(--horizontal-spacing-2-5) / 4);
//       padding: calc(var(--vertical-spacing-1) * 1.625) 0;
//     }

//     button {
//       text-transform: none;
//     }

//     .sb-lifetime-stats__row {
//       border-top: 1px solid var(--dark-black);
//       border-bottom: none;
//     }
//   }
// }

// .sb-regiwall-message {
//   h3 {
//     margin-top: calc(var(--vertical-spacing-1-5) * 1.25);
//     font: $weight-bold 36px/38px $karnak-condensed;
//     font-weight: 700;
//     line-height: 38px;
//   }

//   p {
//     font: $weight-medium 20px/24px nyt-franklin;
//     margin: 0px calc(var(--horizontal-spacing-2-5) * 1.25);
//   }
// }

// .sb-modal-content .sb-modal-body > .sb-dismissable-message {
//   margin-bottom: 0;

//   span {
//     border: none;
//   }
// }

// .sb-dismissable-message {
//   > div {
//     margin-bottom: var(--vertical-spacing-2-5);
//   }
// }

// .sb-error__icon {
//   min-height: 80px;
//   min-width: 80px;
//   background: url('/public/assets/bee-sad.svg') center no-repeat;
// }

// @include view-device(mobile) {
//   .sb-modal-scrim {
//     position: fixed;
//   }

//   .pastPuzzles {
//     .sb-modal-body {
//       padding-left: calc(var(--horizontal-spacing-2-5) * 1.05);
//       padding-right: calc(var(--horizontal-spacing-2-5) * 1.05);
//     }
//   }
// }

// .pz-modal-message {
//   font-size: 15px;
//   line-height: 19px;
//   margin-top: calc(var(--vertical-spacing-0-5) * 0.75);
//   margin-bottom: calc(var(--vertical-spacing-9) / 8);
// }

// @include view-width-min(md) {
//   .sb-modal-scrim {
//     z-index: 4;
//   }

//   .sb-modal-frame {
//     width: 540px;
//     height: auto;
//     max-height: 615px;
//     box-shadow: 0 0 23px 0 rgba(0, 0, 0, 0.08);
//     position: relative;
//     top: 0;
//   }

//   .sb-modal-content {
//     max-height: 600px;

//     .sb-modal-header,
//     .sb-modal-body {
//       padding-left: calc(var(--horizontal-spacing-5) * 1.1);
//       padding-right: calc(var(--horizontal-spacing-5) * 1.1);
//     }

//     .sb-modal-title {
//       font-size: 2em;
//       line-height: 1.0625;
//     }

//     .sb-modal-subtitle {
//       font-size: 1.5em;
//       line-height: 1.1667;
//     }
//   }

//   .sb-modal-wordlist-items {
//     @include list-width(
//       $column-count-md,
//       $column-width-sm,
//       $column-gap
//     );
//   }
// }

// .pz-desktop {
//   @include view-width-min(lg) {
//     .sb-modal-wrapper,
//     .sb-modal-closing .sb-modal-wrapper {
//       transform: scale(0.9);
//     }

//     .sb-modal-open .sb-modal-wrapper {
//       transform: scale(1);
//     }

//     .sb-modal-frame {
//       width: 667px;
//       max-height: 615px;
//     }

//     .sb-modal-content {
//       .sb-modal-header,
//       .sb-modal-body {
//         padding-left: var(--horizontal-spacing-7);
//         padding-right: calc(
//           var(--horizontal-spacing-10) * 1.975
//         ); // Default right padding for SB modals
//       }

//       .sb-modal-title {
//         font-size: 2.125em;
//         line-height: 1.0588;
//       }

//       .sb-modal-subtitle {
//         font-size: 1.625em;
//         line-height: 1.1538;
//       }
//     }

//     .yesterday,
//     .stats,
//     .share,
//     .ranks,
//     .pastPuzzles {
//       .sb-modal-header,
//       .sb-modal-body {
//         padding-right: var(
//           --horizontal-spacing-7
//         ); // Override default right padding so it is equal to left padding
//       }
//     }

//     .sb-modal-wordlist-items {
//       @include list-width(
//         $column-count-md,
//         $column-width-lg,
//         $column-gap
//       );
//     }
//   }
// }

// .sb-moment__rank {
//   font-weight: 600;

//   &::after {
//     content: '';
//     background-size: contain;
//     background-repeat: no-repeat;
//     display: inline-block;
//     background-image: url('/public/assets/spelling-bee-hub/gold-star-icon.svg');
//     height: 1.25rem;
//     width: 1.25em;
//     margin-left: 0.25rem;
//     vertical-align: middle;
//   }
// }

// .pz-icon-close {
//   [data-mode='dark'].display-settings-enabled & {
//     background-image: url('/public/assets/icon-close-dark.svg');
//   }
// }

// .trophies-container {
//   column-gap: var(--horizontal-spacing-4);

//   @media (min-width: 600px) {
//     column-gap: var(--horizontal-spacing-6);
//   }
// }

// .sb-regiwall-stats-darkmode {
//   [data-mode='dark'].display-settings-enabled & {
//     background-image: url('/public/assets/sb-stats-regiwall-darkmode.svg');
//     background-size: contain;
//   }
// }

export default function HowToPlay({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) {
  return createPortal(
    <div id="portal-game-modals">
      <div
        className="sb-modal-system sb-modal-open"
        onClick={() => setIsOpen(false)}
      >
        <div
          role="presentation"
          className={[
            "sb-modal-scrim fixed sm:absolute z-50 inset-0 bg-bg-scrim transition-opacity",
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          ].join(" ")}
        >
          <div className="sb-modal-wrapper">
            <div role="button" className="sb-modal-frame help">
              <div className="sb-modal-top">
                <div role="button" className="sb-modal-close">
                  <X size={20} />
                </div>
              </div>
              <div className="sb-modal-content has-overflow">
                <div className="sb-modal-header">
                  <h3 className="sb-modal-title">How to Play Spelling Bee</h3>
                  <h4 className="sb-modal-subtitle">
                    Create words using letters from the hive.
                  </h4>
                </div>
                <div className="sb-modal-body">
                  <ul className="sb-modal-list">
                    <li>Words must contain at least 4 letters.</li>
                    <li>Words must include the center letter.</li>
                    <li>
                      Our word list does not include words that are obscure,
                      hyphenated, or proper nouns.
                    </li>
                    <li>No cussing either, sorry.</li>
                    <li>Letters can be used more than once.</li>
                  </ul>
                  <h4 className="sb-modal-heading">
                    Score points to increase your rating.
                  </h4>
                  <ul className="sb-modal-list">
                    <li>4-letter words are worth 1 point each.</li>
                    <li>Longer words earn 1 point per letter.</li>
                    <li>
                      Each puzzle includes at least one “pangram” which uses
                      every letter. These are worth 7 extra points!
                    </li>
                  </ul>
                  <p className="sb-modal-message">
                    Need more solving tips?{" "}
                    <a
                      href="https://www.nytimes.com/2021/12/09/crosswords/spellingbee-tips.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      This article can help.
                    </a>
                  </p>
                  <p className="sb-modal-message">
                    New puzzles are released daily at 3 a.m. ET.
                  </p>
                  <p className="sb-modal-message">
                    Think we missed a word? Email us at{" "}
                    <a
                      aria-label="Submit feedback by email"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="mailto:buzzwords@nytimes.com?subject=Spelling Bee Word Suggestion"
                      title="nytgames@nytimes.com"
                      role="link"
                    >
                      buzzwords@nytimes.com
                    </a>
                    .
                  </p>
                  <p className="sb-modal-message">
                    Have thoughts? 
                    <a
                      href="https://iter.ly/kmryl"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Give us feedback
                    </a>
                    .<br />
                    For issues, 
                    <a
                      aria-label="Report a bug by email"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="mailto:nytgames@nytimes.com?subject=Spelling%20Bee%20Bug%20Report%20(mH3Qx0)&amp;body=%0D%0A%0D%0A%0A----%20%0ADevice%20summary%3A%0APage%3A%20%2Fpuzzles%2Fspelling-bee%0APlatform%3A%20Web%20(Desktop)%0ABrowser%3A%20Chrome%20140.0.0.0%0AOS%3A%20OS%20X%2010.15.7%0AScreen%20Resolution%3A%201728%20x%201117%0AViewport%20Size%3A%201285%20x%20992%0ATimezone%3A%20UTC-7%0ABuild%3A%20c06f185%0ARegi%3A%20220789359%0ADigi%3A%20Yes%0AXwd%3A%20Yes%0APage%20View%3A%20HjmEOjEL6GiBYU2VB4mH3Qx0%0ALS%20Used%3A%20150.24%20KB%0ALS%20Available%3A%204.97%20MB%0A%0A"
                      title="nytgames@nytimes.com"
                      role="link"
                    >
                      report a bug
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
