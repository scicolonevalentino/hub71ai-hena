# Roadmap quattro ore per Hena Abu Dhabi

Questa roadmap serve a un solo founder per arrivare a una demo funzionante in quattro ore. Hena Abu Dhabi è il nome scelto. Il primo utente è una persona cieca che si è appena trasferita ad Abu Dhabi per lavoro. Il prodotto la accompagna nei primi 30 giorni con una prossima azione chiara, consultabile con lettore di schermo, testo o voce.

**Lingua del prodotto:** tutta l'app è in inglese, inclusi contenuti, interfaccia, etichette accessibili, messaggi di errore e conversazione vocale.

## Risultato da mostrare

Una persona apre Hena, dice o scrive «Sono arrivato ieri, il mio datore di lavoro segue il visto: cosa faccio adesso?», riceve una risposta fondata sulle fonti, apre l'azione ufficiale pertinente e salva il progresso. Può poi passare da documenti a casa, trasporti e tempo libero senza ricominciare da zero.

Il prodotto è una guida indipendente. La demo non presenta Hena come servizio governativo e non promette di completare pratiche o guidare fisicamente una persona lungo una strada.

## Sequenza di lavoro

| Tempo | Lavoro | Risultato verificabile |
| --- | --- | --- |
| 0:00–0:20 | Preparare quattro schede di contenuto con fonte, data di verifica, azione successiva e limiti dell'informazione. | Le schede coprono documenti, casa, trasporti e tempo libero. |
| 0:20–0:45 | Disegnare un unico percorso: arrivo, prossima azione, dettaglio, fonte ufficiale, progresso. Scrivere i testi prima dell'interfaccia. | Lo scenario della demo si può leggere ad alta voce in tre minuti. |
| 0:45–2:15 | Costruire la pagina e il percorso dei 30 giorni. Rendere utilizzabili tutte le azioni con tastiera e lettore di schermo. Salvare il progresso sul dispositivo. | La persona raggiunge le quattro aree, apre una fonte e riprende il percorso dopo aver ricaricato la pagina. |
| 2:15–3:05 | Collegare voce e AI dopo aver verificato l'accesso al servizio. Opzione da provare: ElevenAgents con modello OpenAI integrato, base di conoscenza limitata alle schede ufficiali e modalità voce più testo. | Una domanda parlata produce una risposta testuale e parlata; l'interazione resta utilizzabile con il lettore di schermo. Le credenziali non compaiono nel browser. |
| 3:05–3:35 | Provare il percorso con tastiera e VoiceOver, poi verificare una domanda per ciascuna area e una domanda senza risposta nelle fonti. | Focus leggibile, controlli annunciati, link corretti e risposta «non lo so» quando manca la fonte. |
| 3:35–4:00 | Preparare e provare il pitch con una demo di tre minuti. | Il racconto mostra problema, persona, percorso, fonti e impatto atteso. |

## Lavoro in parallelo per un solo founder

| Stream | Chi lo porta avanti | Quando | Consegna |
| --- | --- | --- | --- |
| Fonti e contenuto | Codex | Da subito, prima di sviluppare ciascuna area | Quattro schede verificabili con prossima azione e link ufficiale. |
| Accesso alla voce | Valentino e Codex | In parallelo alle fonti e al design | Chiave ElevenLabs e agente privato configurati; nessuna chiave in chat o nel codice pubblico. |
| Esperienza e applicazione | Codex | Dopo aver fissato il percorso e le fonti della funzione interessata | Una pagina accessibile, progresso salvato e conversazione testuale e vocale. |
| Racconto e demo | Codex prepara; Valentino prova ad alta voce | In parallelo alla costruzione, con prova finale sull'app reale | Pitch breve e scenario dimostrabile senza dati inventati. |

La voce può essere collegata solo dopo che esiste una risposta testuale affidabile. Il pitch può nascere subito dalla storia dell'utente e va aggiornato con ciò che la demo riesce davvero a fare.

## Fonti da usare prima di ogni feature

- **Documenti:** [ICP, Issuing Residency Permit](https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64). Verificare il ruolo di datore di lavoro o sponsor nel caso dimostrato; evitare una checklist universale.
- **Casa:** [Abu Dhabi Residents Office, Where To Live](https://www.adro.gov.ae/Living-in-Abu-Dhabi/Where-To-Live). Usare requisiti e collegamenti ufficiali; non inserire percentuali o tariffe senza una verifica aggiuntiva.
- **Trasporti:** [Abu Dhabi Mobility, Taxi](https://admobility.gov.ae/en/taxi-booking). Presentare canali di prenotazione ufficiali, senza affermare che ogni servizio soddisfi esigenze individuali non documentate.
- **Tempo libero:** il JSON canonico `Sources/hena_abu_dhabi_journeys.json` contiene 22 esperienze selezionabili, tra ascolto e cultura, sapori e attività pratiche, natura, arte e comunità. Ogni esperienza ha un URL ufficiale distinto o pertinente e un limite esplicito; la Grande Moschea documenta un'e-guide con linguaggio descrittivo per ciechi, mentre altri luoghi richiedono una verifica diretta del supporto disponibile.
- **Accessibilità:** [W3C, navigazione da tastiera](https://www.w3.org/WAI/fundamentals/accessibility-principles/) e [W3C, moduli accessibili](https://www.w3.org/WAI/tutorials/forms/). Il lettore di schermo è il percorso principale; la voce dell'app si attiva solo su richiesta.
- **Voce e AI:** [ElevenLabs, modelli integrati](https://elevenlabs.io/docs/eleven-agents/customization/llm), [widget voce e testo](https://elevenlabs.io/docs/eleven-agents/customization/widget), [base di conoscenza](https://elevenlabs.io/docs/eleven-agents/customization/knowledge-base), [autenticazione](https://elevenlabs.io/docs/eleven-agents/customization/authentication) e [OpenAI, voice agents](https://developers.openai.com/api/docs/guides/voice-agents) come percorso alternativo.

## Cosa rende l'MVP completo

1. Un percorso continuo dal primo giorno alla prima attività scelta in città.
2. Quattro aree con contenuti verificati, fonte visibile e prossima azione concreta.
3. Navigazione completa con tastiera e lettore di schermo.
4. Percorso scritto completo e conversazione vocale opzionale avviata esplicitamente, con trascrizione visibile.
5. Progresso che resta sul dispositivo dopo il refresh.

## Dopo la demo

Il product market fit resta un'ipotesi finché non si osservano persone cieche usare il percorso. Il primo passo successivo all'hackathon è coinvolgerne alcune, misurare se trovano e capiscono la prossima azione e correggere ciò che ostacola l'autonomia. Il business model canvas può descrivere beneficiario, canali e possibili partner pubblici o datori di lavoro; non serve forzare una monetizzazione nelle quattro ore.

## Stato pratico al 2 ottobre 2026

Il file locale `MVP/.env.local` contiene la nuova chiave ElevenLabs creata da Valentino e l'ID dell'agente privato; non va condiviso né pubblicato. L'app locale serve quattro aree e 28 azioni da `Sources/hena_abu_dhabi_journeys.json`, salva il progresso e collega sia la risposta scritta sia la conversazione vocale a ElevenAgents con modello OpenAI integrato. La base di conoscenza dell'agente include le 22 esperienze: una domanda ampia ottiene una scelta breve, una preferenza specifica una fonte e un limite. Nel browser abbiamo verificato risposte scritte fondate, richieste fuori fonti, avvio della sessione voce, trascrizione, risposta dell'agente e arresto. La prova con VoiceOver e una persona cieca resta da fare prima di dichiarare conformità o product market fit.

Per aprire la demo su questo Mac: [Hena](http://localhost:4173/). Se il server non è già acceso, entrare nella cartella `Hackaton` ed eseguire `node server.mjs`; legge la configurazione locale senza passare la chiave nel comando.
