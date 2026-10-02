# Hena Abu Dhabi

**Your first 30 days, one clear next step.** Hena helps a blind or low-vision newcomer find one useful next action across documents, housing, taxi transport, and 22 ways to explore Abu Dhabi. Each action has an official source, a check date, and a clear limit. The app is an independent guide, not a government service.

## Run locally

Use Node.js 22 or newer. Create `MVP/.env.local` with `ELEVENLABS_API_KEY` and `ELEVENLABS_AGENT_ID` for the AI and voice paths, then run `node server.mjs` from this directory and open `http://localhost:4173/`. The key file is excluded from Git and Vercel. The four source journeys and local progress work without a microphone.

## What is in the repository

- `MVP/index.html`: English, keyboard-first single-page experience with an original animated current motif and reduced-motion support.
- `Sources/hena_abu_dhabi_journeys.json`: the canonical, curated dataset: four journeys, 28 actions including 22 independently selectable first-month experiences, a blind and low-vision access perspective for every action, official URLs, verification dates, and limits.
- `server.mjs`: local/Vercel Node server. It serves the canonical data, requests a short-lived signed URL for the private ElevenAgents voice session, and gets a grounded text answer. The ElevenLabs API key never reaches the browser.
- `Product/agent-prompt.md`: the exact agent prompt and model configuration used for the demo.

The large **Talk to Hena** button starts the optional spoken session only after activation; the same button stops it. A broad leisure question gets a short spoken choice, while a specific interest gets one sourced action. Typed questions and source cards remain usable without audio. Each card offers a verified phone and contact page for the relevant service, plus a question the person can read or copy before contacting it. Hena does not request a callback or send personal information to a provider. Step completion is saved only on the current device.

Open `/government` for **Hena Insights**, a separate English dashboard showing simulated question topics, questions Hena cannot answer from its reviewed sources, and suggested actions not marked done. Its counts are explicitly synthetic; the MVP does not collect live cross-user analytics or expose questions, transcripts, or audio there.

## Scope

Hena cannot view an application, guarantee a venue or taxi's accessibility, provide physical navigation, or answer facts absent from the reviewed cards. Prices and opening hours must be checked on the official source at the time of use. This MVP has been tested in a browser, but still needs a live VoiceOver test and research with blind newcomers before accessibility conformance or product-market fit can be claimed.
