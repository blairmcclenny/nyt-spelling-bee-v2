// .pz-header.pz-game-header .pz-nav-title {
//   // override center on mobile
//   text-align: left;
// }

// .pz-game-screen,
// .pz-game-field {
//   display: flex;
//   flex-direction: column;
// }

// .pz-game-screen {
//   min-height: 90vh;
//   position: relative;
// }

// #spelling-bee-container .pz-game-screen {
//   position: relative;
//   min-height: 550px;

//   .pz-play-tab & {
//     min-height: initial;
//   }
// }

// .pz-game-field {
//   background: var(--bg-page);
//   color: var(--text);
//   flex: 1 0 auto;
// }

// .pz-game-title-bar {
//   padding-top: 24px;
//   padding-bottom: 24px;

//   .pz-game-title {
//     font-family: 'nyt-karnakcondensed';
//     font-size: 42px;
//     font-weight: 700;
//     font-weight: bold;
//     margin-right: 16px;
//   }

//   .pz-game-title__trademark {
//     &::after {
//       content: '®';
//       font-size: 18px;
//       vertical-align: super;
//     }
//   }

//   .pz-game-date {
//     display: inline-block;
//     font-size: 28px;
//     font-weight: 300;
//   }

//   .pz-byline__text {
//     font-size: 15px;
//   }
// }

// .pz-game-toolbar {
//   border-top: 1px solid var(--stroke-tertiary);
//   border-bottom: 1px solid var(--stroke-tertiary);

//   .pz-mobile & {
//     display: none;
//   }
// }

// .pz-game-toolbar-content {
//   margin-top: 0;
//   margin-bottom: 0;
//   flex-grow: 1;
// }

// .pz-toolbar-button {
//   font-family: 'nyt-franklin';
//   font-size: 1.125em;
//   line-height: 45px;
//   display: inline-block;
//   padding: 6px 13px 4px;
//   color: var(--text);

//   &:hover {
//     cursor: pointer;
//     background-color: $gray6;
//   }
// }

// // ----------------
// // MOBILE OVERRIDES
// // ----------------

// @media (max-width: 992px) {
//   .pz-game-title-bar {
//     .pz-game-title {
//       font-size: 37px;
//     }

//     .pz-game-date {
//       font-size: 25px;
//     }
//   }
// }

// @include view-device(mobile) {
//   #connections-container .pz-game-field,
//   #sudoku-container .pz-game-field {
//     overflow-y: auto;
//   }

//   #spelling-bee-container .pz-game-field {
//     width: 100%;
//     height: 100%;
//     overflow-y: auto;
//     max-height: none;
//     min-height: initial;
//     padding: 0;
//   }

//   @include view-width-max(sm) {
//     // Toolbar slides into Nav when device is mobile and small
//     // NOTE: This has some weird behavior on scroll
//     .pz-game-toolbar,
//     .pz-game-title-bar {
//       display: none;
//     }

//     .pz-game-field {
//       margin-top: 0;
//     }
//   }
// }

// .pz-byline {
//   .pz-byline__image {
//     height: 48px;
//     width: 48px;
//     margin-right: 7px;
//   }
//   .pz-byline__text {
//     font-size: 15px;
//     letter-spacing: 0.24px;
//   }
// }

// @include view-device(desktop) {
//   .pz-byline {
//     @include flexbox(row, center, flex-start);
//     padding-top: 5px;
//   }
// }

// @include view-device(mobile) {
//   .pz-byline {
//     @include flexbox(row, center, center);
//     height: 40px;
//   }
// }

/* stylelint-disable custom/playbook-spacing-rules */

// ------
// SHARED
// ------
// .pz-row,
// .pz-col {
//   // these can act as a container...
//   display: flex;
//   flex-wrap: wrap;
//   align-items: stretch;
//   min-height: 1px; // prevent collapse

//   // or as a child...
//   // the flex basis is set to 0
//   // because it makes flex grow work more predictably
//   // ie if one item is flexgrow:2 and the rest are flexgrow:1
//   // the 2 will be exactly double the one
//   flex: 1 1 0%; // grow, shrink, basis
// }

// // GRID SECTIONS
// .pz-desktop {
//   .pz-section {
//     & + .pz-section {
//       margin-top: ($gutter-page-desktop - ($gutter-col * 0.5));
//     }
//   }
// }

// .pz-section-filled {
//   padding-top: ($gutter-page-desktop - ($gutter-col * 0.5));
//   padding-bottom: ($gutter-page-desktop - ($gutter-col * 0.5));

//   & + .pz-section-filled {
//     margin-top: 0;
//   }
// }

// // ---------
// // GRID ROWS
// // ---------
// // rows establish the grid and the page gutter
// // they should be used with column children
// .pz-row {
//   margin: 0 auto;
//   max-width: $row-max-width-desktop;
//   padding: 0 ($gutter-page-desktop - ($gutter-col * 0.5));
// }

// // ------------
// // GRID COLUMNS
// // ------------
// // columns are even height
// // and have gutters between
// .pz-col {
//   &.pz-col-full {
//     min-width: 100%;
//   }
// }

// // ------------
// // GRID MODULES
// // ------------
// // modules simulate gutters
// // this makes it simpler to get different column widths
// // to align as expected
// .pz-module {
//   flex: 1 1 auto;
//   margin: ($gutter-col * 0.5);
// }

// // ---------------
// // MOBILE OVERIDES
// // ---------------
// @include view-width-max(xl) {
//   .pz-col-full-xl {
//     min-width: 100%;
//   }
// }

// @include view-width-max(lg) {
//   .pz-col-full-lg {
//     min-width: 100%;
//   }
// }

// @include view-width-max(md) {
//   .pz-col-full-md {
//     min-width: 100%;
//   }
// }

// @include view-width-max(sm) {
//   .pz-col-full-sm {
//     min-width: 100%;
//   }
// }

// @include view-width-max(xs) {
//   .pz-row {
//     max-width: $row-max-width-mobile;
//     padding: 0 ($gutter-page-mobile - ($gutter-col * 0.5));
//   }

//   .pz-col,
//   .pz-col-full-xs {
//     min-width: 100%;
//   }
// }

/* stylelint-disable custom/playbook-spacing-rules */

// @import 'variables.scss';

/* ------------------ */
/* START LAYOUT       */
/* ------------------ */

// $small-device-max-height: calc(var(--vh, 1vh) * 68);
// $small-device-height: calc(var(--vh, 1vh) * 68);
// $large-device-height: calc(var(--vh, 1vh) * 75);
// $large-device-max-height: calc(var(--vh, 1vh) * 75);
// $desktop-height: calc(var(--vh, 1vh) * 64);

// .pz-mobile:not(.pz-play-tab) {
//   // Accounting for URL bar in mobile Safari
//   height: calc(var(--vh, 1vh) * 100);
// }

// .pz-play-tab.game-moment {
//   // Avoid 100vh in Play Tab when the game screen is the on-stage Moment
//   // 100vh is required for full screen background color in Welcome moment
//   // In the game screen moment 100vh adds extra whitespace below the viewport
//   height: calc(var(--vh, 1vh) * 100);
// }

// .pz-mobile {
//   overflow-y: hidden;
// }

// .pz-mobile.enable-scrolling {
//   overflow-y: auto;

//   &.pz-newsreader,
//   &.pz-games-app {
//     overflow-y: hidden;
//   }
// }

// .sb-content-box {
//   flex-grow: 1;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-content: stretch;

//   &:not(.sb-expanded) {
//     overflow-y: auto;
//   }
// }

// .pz-games-app .sb-content-box {
//   font: -apple-system-body;
//   font-family: 'nyt-franklin';
// }

// .sb-controls-box {
//   flex: 1;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .sb-controls {
//   position: relative;
//   max-height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

// .pz-games-sale-banner .sb-controls-box {
//   @include tiny-phone {
//     padding-bottom: 60px;
//   }
// }

// .sb-wordlist-box,
// .sb-progress-box {
//   margin: var(--horizontal-spacing-1-5);
// }

// .sb-progress-box {
//   margin-bottom: 0;
// }

// .sb-wordlist-box {
//   border-radius: 6px;
//   border: 1px solid var(--stroke-tertiary);
//   overflow: hidden;
//   letter-spacing: 0.005em;
// }

// .sb-wordlist-drawer {
//   overflow: hidden;
//   max-height: 0;
//   transition: max-height 200ms ease;
// }

// .sb-expanded .sb-wordlist-drawer {
//   max-height: $small-device-max-height;
// }

// .sb-wordlist-window {
//   position: relative;
//   overflow: hidden;
//   height: $small-device-height;
// }

// // switching controls

// .sb-controls {
//   opacity: 1;
//   transition: opacity 150ms 200ms ease;
// }

// .sb-expanded {
//   .sb-controls {
//     opacity: 0;
//     transition: opacity 150ms ease;
//   }
// }

// .sb-expanded,
// .sb-contracting {
//   .sb-controls {
//     position: absolute;
//     pointer-events: none;
//   }
// }

// @include view-width-min(md) {
//   .sb-content-box {
//     flex-direction: row-reverse;

//     max-width: 1080px;
//     margin: 0 auto;
//   }

//   .sb-status-box {
//     width: 50%;
//   }

//   .sb-expanded .sb-wordlist-drawer {
//     max-height: $large-device-max-height;
//   }

//   .sb-wordlist-window {
//     overflow-x: auto;
//     height: $large-device-height;
//   }

//   .sb-status-box,
//   .sb-wordlist-box,
//   .sb-wordlist-drawer {
//     display: flex;
//     flex-direction: column;
//   }

//   .sb-wordlist-drawer,
//   .sb-wordlist-window {
//     max-height: none !important;
//   }

//   .sb-expanded .sb-controls {
//     opacity: 1;
//   }
// }

// @include view-device(mobile) {
//   .pz-game-title-bar {
//     display: none;
//   }

//   @include view-width-min(xs) {
//     .pz-footer {
//       display: none;
//     }
//   }

//   @include view-width-min(md) {
//     .sb-wordlist-box,
//     .sb-progress-box {
//       margin-right: var(--horizontal-spacing-3);
//     }
//   }
// }

// #spelling-bee-container {
//   .pz-byline {
//     margin: calc(var(--vertical-spacing-0-5) * 0.25) 0
//       calc(var(--vertical-spacing-9) / 8);
//   }
// }
// @include view-device(desktop) {
//   #spelling-bee-container {
//     .pz-byline {
//       margin: calc(var(--vertical-spacing-0-5) * 2.5) 0
//         calc(var(--vertical-spacing-0-5) * -2.5);
//       padding-top: 0px;
//     }
//   }

//   .sb-wordlist-window {
//     position: relative;
//     overflow: hidden;
//     height: $desktop-height;
//   }
// }

// // mobile toolbar
// .pz-games-app .pz-nav__toolbar {
//   font: -apple-system-body;
//   font-family: 'nyt-franklin';
// }

// .pz-mobile .pz-toolbar-button,
// .pz-mobile .pz-dropdown__button {
//   font-size: 1em;
//   padding: 0 calc(var(--horizontal-spacing-0-5) * 2.5);
//   height: 100%;
//   display: flex;
//   align-items: center;
// }

// .pz-mobile .pz-dropdown__label,
// .pz-mobile .pz-dropdown__arrow {
//   margin-top: calc(var(--vertical-spacing-0-5) * 0.5);
// }

// .pz-mobile .pz-dropdown__label {
//   height: 100%;
//   display: flex;
//   align-items: center;
// }

// .pz-mobile .pz-toolbar-right {
//   height: 100%;
//   display: flex;
// }

// .pz-mobile .pz-nav__toolbar {
//   height: 48px;
// }

// .pz-toolbar-button {
//   &:hover {
//     cursor: pointer;
//     background-color: var(--bg-toolbar-selected);
//   }
// }

// .pz-dropdown {
//   /**
//    * These !important directives are done because there is CSS-in-JS
//    * overriding the styles in shared/DropDown.tsx.
//    */

//   & > .pz-dropdown__button:not(.pz-dropdown__show) {
//     background-color: var(--bg-page) !important;
//   }
//   .pz-dropdown__show {
//     background-color: var(--bg-toolbar-selected) !important;

//     & + .pz-dropdown__list {
//       border-color: var(--stroke-tertiary);
//       box-shadow: 0px 5px 5px 0px
//         color-mix(
//           in srgb,
//           var(--text-constant),
//           var(--transparent) 85%
//         );

//       .pz-dropdown__menu-item {
//         background-color: var(--bg-dropdown);
//         border-bottom: 1px solid var(--stroke-secondary);

//         &:last-child {
//           border-bottom: none;
//         }
//       }
//     }
//   }
// }

// .pz-toolbar-button.pz-toolbar-button__settings {
//   svg {
//     position: relative;
//     display: block;
//     margin: 0 auto;
//     height: 100%;
//     path {
//       fill: var(--text);
//     }
//   }
// }

// .sb-error__hide-element {
//   display: none;
// }

// // To remove white outline on 'new' pill in welcome moments only
// #spelling-bee-container .pz-moment__welcome .pz-moment__button span {
//   border: none;
// }

// // Repositions the notification dot slightly on desktop
// .pz-toolbar-button.pz-toolbar-button__stats {
//   position: relative;

//   svg {
//     transform: translate(-6px, 16px);
//   }
// }

// // Repositions the notification dot slightly on mobile
// .pz-mobile .pz-toolbar-button.pz-toolbar-button__stats {
//   svg {
//     transform: translate(-2px, 14px);
//   }
// }

// .sb-tooltip-trigger {
//   display: inline;
// }

export default function Header() {
  return (
    <header>
      <div className="pz-row pz-game-title-bar">
        <div className="pz-module">
          <h2>
            <em className="pz-game-title">Spelling Bee</em>
            <span className="pz-game-date">August 21, 2025</span>
          </h2>
          <div className="pz-byline">
            <span className="pz-byline__text">Edited by Sam Ezersky</span>
          </div>
        </div>
      </div>
    </header>
  )
}
