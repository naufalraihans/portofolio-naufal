// One-shot: extract the template's <style data-8b-part> blocks into src/app.css.
// Re-run after pulling template updates: node scripts/build-css.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const tpl = readFileSync('plan/fashion-brand-website-template/index.html', 'utf8');
const blocks = [...tpl.matchAll(/<style data-8b-part="([^"]+)">([\s\S]*?)<\/style>/g)]
	.filter(([, name]) => name !== 'layers')
	.map(([, , css]) => css.trim());

let css = blocks.join('\n\n');
css = css
	.replaceAll('#collections', '#work')
	.replaceAll('#studio', '#about')
	.replaceAll('#nav.is-hidden', '#nav.hidden');

const header = `/* Fonts (Google Fonts, OFL — see plan/fashion-brand-website-template/CREDITS.md) */
@font-face {
  font-family: 'Host Grotesk';
  font-style: normal;
  font-weight: 400 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/hostgrotesk/v5/co3BmWBnlCJ3U42vbbfdwMjZqljm0U0.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Host Grotesk';
  font-style: normal;
  font-weight: 400 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/hostgrotesk/v5/co3BmWBnlCJ3U42vbbfdwMjZpFjm.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Schibsted Grotesk';
  font-style: normal;
  font-weight: 400 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/schibstedgrotesk/v7/Jqz55SSPQuCQF3t8uOwiUL-taUTtap9Iayoxdg.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Schibsted Grotesk';
  font-style: normal;
  font-weight: 400 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/schibstedgrotesk/v7/Jqz55SSPQuCQF3t8uOwiUL-taUTtap9Gayo.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@layer tokens, base, atoms, layout, sections, scenes;

`;

const additions = `

/* ---- portfolio additions (not in template) ---- */
@layer sections {
#palette .pal__name { font-family: var(--font-1); letter-spacing: -.035em; text-transform: uppercase; }
#about .cv__block { display: grid; gap: 4px; margin-top: 8px; }
#about .cv__list { display: grid; }
#about .cv__item { position: relative; display: grid; grid-template-columns: 150px 1fr; gap: 16px; padding: 18px 0; }
#about .cv__period { padding-top: 2px; }
@media (max-width: 760px) {
  #about .cv__item { grid-template-columns: 1fr; gap: 6px; }
}
}
`;

writeFileSync('src/app.css', header + css + additions + '\n');
console.log('app.css written:', blocks.length, 'blocks');
