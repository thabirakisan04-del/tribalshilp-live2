# TribalShilp

A mobile-first science exhibition experience celebrating Indian tribal agriculture, crafts and living heritage. Built with React, Vite, Tailwind CSS and Lucide icons.

## Run locally

```bash
npm install
cp .env.example .env
# Add a Google Gemini API key to VITE_GEMINI_API_KEY in .env
npm run dev
```

Without a key, all local guides, listings, learning modules and demo interactions work; live Gemini features show a clear configuration warning. The leaf scanner and Heritage Guide use the Gemini `gemini-1.5-flash` model. The Mandi/weather panel is illustrative and marketplace checkout is a simulation.

## Gemini key note

Vite exposes `VITE_*` variables in the browser bundle. The requested direct-browser integration is suitable for a local exhibition/demo only: do not use a production API key in a public deployment. For production, proxy Gemini requests through a server-side endpoint, restrict the key by API and application, and configure quotas.

Artisan certificates are exhibition mockups generated in the browser with Web Crypto SHA-256 and a QR preview; they are not independently verified credentials.
