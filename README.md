# WDD 231 Web Frontend Development I

BYU-Idaho, Fall 2026. Anderson, Julie Ann. MW 9:00-10:00 AM, STC 341.

National Parks Service project for the **Prove: NPS 1-7** assignment series
(W01, W02, W03, W05, W07, W09, W12). Started from the
[matkat99/nps](https://github.com/matkat99/nps) course template.

## Setup

```
npm install
npm run start     # dev server on localhost:5173
npm run build     # production build into dist/
```

Requires a free National Park Service API key. Copy `src/.env.sample` to `src/.env`
and set `VITE_NPS_API_KEY`. Get a key at <https://www.nps.gov/subjects/developer/get-started.htm>.

Note: `VITE_`-prefixed variables are embedded in the client bundle by design, so this
key is visible in the built output. That is expected for this assignment. Never use the
pattern for a real secret.

## Deployment (Netlify)

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Branch | `main` |

`dist/` is gitignored because Netlify builds it on every push.

## Notes

Personal notes and clippings are gitignored so the graded repo stays clean.
See `.gitignore` to re-enable tracking.
