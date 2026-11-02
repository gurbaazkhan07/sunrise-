# Sunrise Tea website

Static website for Sunrise Tea (H.A. Marketing, Ahmedabad). No build step needed.

## Folder structure

```
sunrise-tea/
├── index.html            Page content (HTML only)
├── css/
│   ├── styles.css        Main design: colours, layout, cards, cart
│   └── mobile.css        Mobile button fixes (loaded after styles.css)
├── js/
│   ├── data.js           Products, prices, image paths, WhatsApp number
│   └── app.js            Cart, forms, menu and WhatsApp order logic
└── assets/
    └── images/           Logo, pack photos (front/back) and the ad banner
```

## How to run

Open `index.html` in a browser. Keep the folders together, because the page loads
`css/`, `js/` and `assets/` using relative paths.

For a local test server (optional): `python3 -m http.server 8000` inside this folder,
then open http://localhost:8000.

## Common edits

| What | Where |
|---|---|
| Change a price or product name | `js/data.js` (the `P` list) |
| Change the WhatsApp number | `js/data.js` (`WA`) and the `wa.me` links in `index.html` |
| Replace a pack photo | Overwrite the file in `assets/images/` with the same name |
| Change colours or fonts | `:root` at the top of `css/styles.css` |
| Adjust button sizes on phones | `css/mobile.css` |

After changing a price in `data.js`, also update the matching price in the
`application/ld+json` block in the `<head>` of `index.html` (used by Google).

## Publishing

Upload the whole folder to any static host (Netlify, GitHub Pages, Cloudflare Pages,
or your hosting's `public_html`). `index.html` must stay at the top level.
