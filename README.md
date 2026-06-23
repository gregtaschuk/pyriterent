# pyrite.rent

The dedicated website for **Pyrite Rent**, a peer-to-peer tool rental app.

Vite + React + React Router, deployed to GitHub Pages on the custom domain
`pyrite.rent` (see `CNAME`).

## What it serves

- **`/`** — a sparse landing page (short product explanation; to be expanded).
- **`/tools/:cardKeyHash`** — tool deep-link landing for NFC JavaCard share
  links. Reads the tool from the subgraph and bounces into the app.
- **`/tag`, `/tag/:uid`** — NTAG 424 tag-tap landing (the site holds no key
  material; authenticity is verified inside the app).
- **`/.well-known/assetlinks.json`** — Android App Links verification for
  `com.pyrite.rental`.
- **`/.well-known/apple-app-site-association`** — iOS Universal Links for
  `8KM2YJPR25.com.pyrite.rental` (`/tools/*`, `/t/*`, `/tag`, `/tag/*`).

These tool/tag routes were extracted from the `pyriteship` (pyrite.rocks)
consultancy site as part of the `pyrite.rent` domain cutover.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

Environment overrides (optional): `VITE_SUBGRAPH_URL`, `VITE_IPFS_GATEWAY`.
