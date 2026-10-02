# Hena Abu Dhabi — screen-reader-first experience

## Scope

One English-language, single-column page guides a newcomer through one useful action at a time during their first 30 days in Abu Dhabi. The same path works with a screen reader, keyboard, enlarged text, or sight. There is no disability selection, profile, sign-in, map, or day-by-day gate. The four areas are Documents, Home, Transport, and Things to do; changing area preserves saved progress.

Hena is an independent guide. It does not submit applications, confirm immigration status, or provide physical wayfinding. The written path is complete without a microphone. Voice is a separate live conversation opened by an explicit control; ElevenAgents sends spoken questions and replies aloud while that session is active. No app audio starts on load, focus, a written answer, or refresh. The canonical source for all action, limit, URL, and verification text is `../Sources/hena_abu_dhabi_journeys.json`; this document defines interaction and presentation, not a second copy of those claims.

## End-to-end journey and UI copy

1. **Entry.** First keyboard control: “Skip to main content”. The header has a compact “Insights dashboard” link to the separate synthetic demo at `/government`. Page title is “Hena Abu Dhabi”; a prominent badge names blind and low-vision newcomers as the audience. The H1 is “You're here. Let's make Abu Dhabi yours.” Payoff: “Your first 30 days, one clear next step.” Below the voice control, three numbered cues show the actual path: ask by voice or text, get a step with access in mind, check the official source. Scope: “Hena is an independent guide. Check official sources before you act.” On return, show the number of steps saved on this device. Keep the same page structure.

2. **Start.** A prominent “Talk to Hena” button sits in the hero below the promise. Its activation is the explicit gesture that opens the voice panel and starts one live conversation; Hena greets the person aloud and asks which of the four areas matters first. The button becomes “Stop voice conversation” while active and stays beside the animated current motif. A visible “Voice is off”, “Connecting voice…”, “Listening”, or “Hena is speaking” label accompanies it. The spoken welcome never plays on page load or focus.

3. **Ask in writing.** Visible field label: “What do you need help with?” Helper gives the new-employer example and warns against entering ID or passport numbers. Multiline text field; the example is not prefilled. Button: “Get next step”. Enter inserts a line; the button submits. Device dictation may be used with the text field. Writing requires no microphone.

4. **Choose an area.** H2: “Explore an area”. Intro: “Choose another area at any time. Your progress stays here.” Four buttons: “Documents”, “Home”, “Transport”, “Things to do”. Selection is conveyed by text/shape and programmatic state, never colour alone. Selecting an area shows its card in the result region, without clearing completed steps.

5. **Demo answer.** On “I arrived yesterday. My employer is handling my visa. What should I do next?”, show a brief “Finding your next step…” state, then H2 “Your next step”; area “Documents”; the residency step whose source is cited by the agent, its limit, official source, real verification date, and a source link named with the source title. “Hena's answer” remains readable text. A failed answer request gives a retryable error while direct area browsing remains available. Link opens in the same tab; browser Back returns to Hena. “Mark this step done” means the person checked or took the named step, not that a permit was issued.

6. **Save and continue.** After completion, status: “Step saved on this device.” Completed label uses the action or experience name. “Mark as not done” reverses it. “Continue to next step” appears for the sequential settlement journeys; leisure uses an independent choice of experiences. Save only step identifiers on this device, not questions, transcripts, or audio. Four area buttons remain available with no forced order.

## Other area cards

Each card has the same order: area, the source-backed access perspective under “Without relying on sight”, one action under “What to do now”, source limit, official source and verification date, official link, completion control. All 28 actions across the four journeys are rendered directly from `hena_abu_dhabi_journeys.json`. Things to do offers 22 independent experiences grouped into four keyboard-accessible moods: Hear & learn, Taste & make, Outside & unwind, and Arts & community. A broad question gets a short spoken choice; a named interest routes to a matching source card. When an agent answer names an official source from the dataset, its card is shown so spoken advice and visible action stay aligned. Hena says the source name while the page supplies its clickable link; she does not read web addresses aloud. Do not add prices, eligibility, opening hours, accessibility guarantees, or a universal checklist. Factual questions outside the dataset show the no-answer state. Area buttons give direct access to all four journeys.

## Human handoff

After the official source, each step shows “Contact the service for this step” with a direct call link. The panel names the appropriate official contact, says what that service can help with, offers its verified phone number and contact page, and gives one short first-person question that a blind or low-vision newcomer can read aloud or copy. Contact details and wording come from the journey's `handoff` record in the canonical JSON; for leisure, the displayed question inserts the selected experience and its official source title. Calling and copying require explicit activation; Hena does not send the question, collect a phone number, or request a callback. No service has promised a five-minute response.

The user contacts the service or provider, checks the next action, and marks the step done only after taking it. This remains an independent guide: the official contact handles its own service, and a venue must confirm support for a particular visit.

## Optional speech path

1. “Talk to Hena” is the single, large voice CTA. It requests microphone access and starts the ElevenAgents session on activation. It never starts from load, focus, or a written answer. The agent's first message is a short English welcome after connection. The panel explains that Hena may reply aloud while active and that the written form is available for a question the user wants to review before sending.
2. The hero button becomes “Stop voice conversation” while the session is active. “Close voice controls” also ends the session. The current transcript appears as ordinary text, with speaker labels, and is not a live region. A user utterance populates the written question field. When the agent names a source from the dataset, the matching card appears below without moving focus; a broad leisure answer opens its 22-idea chooser. Speech never marks progress. The written path remains available for review or a separate typed question.
3. The native voice session combines speech recognition, sending, and playback. A separate “Play answer” would require another speech path and cannot truthfully control ElevenAgents' automatic reply. The explicit session start and stop are the user's audio controls. After a sourced reply finishes speaking, a brief status points to the official link and save button below; it does not repeat the reply. Agent transcript and card text are not live regions. Verify VoiceOver plus audio in a live test before claiming this interaction is accessible.
4. If the session fails, show “Voice is unavailable right now. You can type your question.” The text path remains complete. Agent credentials and a private signed URL flow are configured, as recorded in `voice-integration.md`.

## Errors and uncertainty

- Empty/blank submit: “Enter a question to get a next step.” Keep focus in the field; associate the error with it.
- No answer supported by verified cards: H2 “I don't know from the sources I have.” Body “Try a question about documents, home, transport, or things to do. For a personal decision, check the official source or ask the relevant provider.” Focus the H2. Do not guess or show a completion control.
- Answer service failure: show “I couldn't get a next step right now. Try again, or choose an area below.” Preserve the question so it can be submitted again. The direct area buttons remain usable.
- Microphone denied/unavailable: “Microphone access is off. You can type your question instead.” Keep the written form usable and do not retry permission automatically.
- Voice connection failure: “Voice connection ended. You can type your question.” The saved progress and written card remain available.
- Local save failure: “This step could not be saved on this device.” Never display the success message on failure.

## Focus, keyboard, and screen-reader contract

1. English page language, one main region, semantic H1/H2 hierarchy, and DOM reading order identical to the visible single-column order. Static headings and paragraphs do not enter Tab order. First Tab reaches “Skip to main content”; activation reaches the H1.
2. Initial Tab order after skip: “Insights dashboard” link → hero “Talk to Hena” → question field → “Get next step” → Documents → Home → Transport → Things to do. In leisure, mood buttons and experience buttons precede the action, source link and completion control. Other cards have the source link → completion/reversal button → optional continue button. Use native buttons and links, without positive tabindex.
3. On submission or area change, announce a brief polite status “Finding your next step…” only if waiting. When ready, move focus once to “Your next step” or the no-answer H2; stop the loading announcement. Do not make the whole answer a live region or duplicate its speech. An empty question keeps focus in its field.
4. Activating “Talk to Hena” leaves focus on that hero button as its label becomes “Stop voice conversation”; the next voice-panel control is “Close voice controls”. Closing returns focus to the hero button. No keyboard trap. If connection fails, the hero button again says “Talk to Hena” and typing remains available.
5. Native button keys are Enter/Space; link key is Enter. Receiving focus never triggers navigation, recording, or playback. The source link name identifies its destination; browser Back preserves Hena's usable state.
6. Every focused control has a strong visible focus indicator. Labels are visible and associated with fields. Selected/completed state uses words as well as styling. At 200% text zoom and 320 CSS pixels width, all content and controls remain in one column without horizontal page scrolling.

## Acceptance checks for the four-hour MVP

- With keyboard and VoiceOver only, a tester reads the intro, types the demo question, submits it, reaches “Your next step”, opens the correct ICP source, returns with browser Back, marks the step done, and enters another area without sighted help. Announced and visual order agree.
- The demo answer gives one action, states what Hena cannot verify, shows an actual source-check date, and links to ICP. Home, Transport, and Things to do each show one verified action and correct official link. An unrelated question gives the exact no-answer state.
- Refresh after completion retains it; switching areas or returning from a source does not erase it. “Mark as not done” reverses it. A failed save is reported accurately.
- With VoiceOver running, load, refresh, Tab focus, and written answer arrival produce no app audio. The live voice conversation begins only when the hero “Talk to Hena” is activated and ends with “Stop voice conversation” or closing its controls. The brief spoken welcome and later replies are expected while active. Test that VoiceOver state announcements do not duplicate the whole reply and that stopping works by keyboard. Voice failure leaves typing usable.
- Keyboard reaches and operates every visible control in the specified order, without trap or focus-triggered context changes. VoiceOver announces labels, state, brief loading/save status, and field error once.
- At 200% zoom and 320 CSS pixels width, nothing disappears or needs horizontal page scrolling. Normal text contrast is at least 4.5:1, focus is clearly visible, and meaning never relies on colour alone.

## Primary accessibility references

- W3C WAI: https://www.w3.org/WAI/fundamentals/accessibility-principles/ ; https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html ; https://www.w3.org/WAI/tutorials/forms/labels/ ; https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html ; https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html ; https://www.w3.org/WAI/WCAG22/Understanding/reflow.html .
- RNIB: https://www.rnib.org.uk/documents/1646/RNIB_WCAG_2.1_Website_Guidelines_Quick_Start-up_Guide__2021.pdf ; https://www.rnib.org.uk/documents/2147/APDF-RE210401_APPS_B2B_Accessible_Design_Guide-V01.pdf .

## Visual direction
Usare la palette Experience Abu Dhabi come ispirazione cromatica: blu profondo e ciano/turchese luminoso, con un piccolo accento corallo/magenta e superfici chiare. Verificare ogni coppia cromatica sul contrasto WCAG; testo, controlli e focus ring restano leggibili anche senza gradienti. Non replicare la sfera lucida del riferimento né l'orb OpenAI: per Hena creare un segno originale “current/ripple”, composto da due o tre archi asimmetrici e sfalsati che suggeriscono una corrente attorno a un centro aperto. È un singolo elemento decorativo, non un controllo e non un indicatore esclusivo di stato.

## Stato della voce
Vicino ai controlli voce e sempre come testo visibile, mostrare uno stato esplicito: “Voice is off”, “Connecting voice…”, “Listening”, “Hena is speaking”. All'inizio: “Voice is off”. “Listening” segue l'avvio effettivo della sessione; “Hena is speaking” appare solo quando l'agente riproduce audio nella sessione avviata dall'utente. In assenza di audio/permessi, restare sul testo e mostrare l'errore/fallback già definito. Non attivare microfono o audio all'apertura o quando cambia focus.

## Movimento e accessibilità
Il motivo current/ripple può animarsi con una deriva lenta e non periodica in ascolto/elaborazione, e un impulso contenuto durante la riproduzione. È aria-hidden="true", non riceve focus e non porta informazioni necessarie. Usare prefers-reduced-motion: reduce per sostituire ogni animazione con una forma statica; colore/posizione non sono l'unico segnale. Aggiornare lo stato testuale accessibile con annunci brevi e non ripetuti; non far leggere all'assistente vocale la forma decorativa o l'intera risposta due volte. Mantenere il percorso a colonna singola e l'ordine form → testo risposta → fonte → progresso → controllo opzionale voce, il focus visibile, i controlli nativi e il reflow a zoom.

Stati e criteri aggiunti: con animazioni disabilitate o CSS motion ridotto, gli stati restano distinguibili e nominati in testo; la grafica è esclusa dall'albero accessibilità; “Listening” compare solo mentre la sessione microfono è attiva e “Hena is speaking” soltanto durante la risposta vocale della sessione deliberatamente avviata; nessun audio parte senza gesto dell'utente. Verificare il contrasto di testo e focus sia sopra superfici chiare sia sopra gli accenti della palette.
