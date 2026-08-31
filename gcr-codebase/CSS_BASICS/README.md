# Assignment 5 — CSS Basics

Ten webpages, each with its own HTML file and its own CSS file. No JavaScript,
no external frameworks, no CDN links — every page opens straight from the
folder and works offline.

## How to open

Open `index.html` in any browser and follow the links, or open any
`qNN-*.html` file directly.

## Files

| # | Page | Focus |
|---|------|-------|
| 1 | `q01-portfolio.html` / `.css` | Fixed header, px/em/%/vh/rem units, flexbox footer pinned to the bottom |
| 2 | `q02-city.html` / `.css` | header/nav/main/footer, linear + radial gradients, two `background-attachment: fixed` sections |
| 3 | `q03-team.html` / `.css` | Three-column grid, box model, shadows, highlighted lead card, single column under 600px |
| 4 | `q04-article.html` / `.css` | `::first-letter`, `::first-line`, `<mark>`, blockquote with left border |
| 5 | `q05-pricing.html` / `.css` | Three equal columns, hover scale + colour change with transitions, equal heights |
| 6 | `q06-gallery.html` / `.css` | Six images, `scale(1.1)` on hover, absolutely positioned caption revealed with opacity |
| 7 | `q07-contact.html` / `.css` | Form centred on both axes, styled inputs, `:focus` border colour |
| 8 | `q08-dashboard.html` / `.css` | Fixed topbar, full-height sidebar, content boxes, sidebar stacks on small screens |
| 9 | `q09-newspaper.html` / `.css` | `column-count`, `column-gap`, `column-span: all`, justified text, floated image |
| 10 | `q10-complete-layout.html` / `.css` | Sticky nav, hero, two-column about, three services, form, footer; relative + absolute + fixed positioning |

## Images

`images/` holds SVG placeholders generated for this assignment. They are
plain shapes and gradients, so nothing here depends on an internet
connection or on third-party image rights. Swap in your own photos by
replacing the files and keeping the same names.

## Notes on the CSS

- Every stylesheet opens with a comment block listing what that page
  demonstrates, and the logic behind the less obvious rules is commented
  inline.
- Colours are declared once as custom properties at the top of each file so
  the light-on-dark and dark-on-light pairs stay consistent.
- All ten pages are responsive, and keyboard focus is visible everywhere.
