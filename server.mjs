import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadEnvFile } from 'node:process';

const directory = dirname(fileURLToPath(import.meta.url));
try { loadEnvFile(join(directory, 'MVP', '.env.local')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
const port = Number(process.env.PORT || 4173);

const send = (response, status, body, type) => {
  response.writeHead(status, {
    'Content-Type': type,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(body);
};

async function getSignedUrl() {
  const key = process.env.ELEVENLABS_API_KEY;
  const agentId = process.env.ELEVENLABS_AGENT_ID;
  if (!key || !agentId) throw new Error('ElevenLabs is not configured');
  const url = new URL('https://api.elevenlabs.io/v1/convai/conversation/get-signed-url');
  url.searchParams.set('agent_id', agentId);
  const upstream = await fetch(url, { headers: { 'xi-api-key': key } });
  if (!upstream.ok) throw new Error(`ElevenLabs signed URL: ${upstream.status}`);
  const { signed_url: signedUrl } = await upstream.json();
  if (!signedUrl) throw new Error('ElevenLabs returned no signed URL');
  return signedUrl;
}

async function answerQuestion(question) {
  const signedUrl = await getSignedUrl();
  const greetingPrefix = "Welcome to Abu Dhabi. I'm Hena.";
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(signedUrl);
    let sent = false;
    let finished = false;
    const finish = (error, answer) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      socket.close();
      if (error) reject(error); else resolve(answer);
    };
    const timer = setTimeout(() => finish(new Error('Answer timed out')), 25000);
    socket.addEventListener('open', () => socket.send(JSON.stringify({
      type: 'conversation_initiation_client_data',
      conversation_config_override: { conversation: { text_only: true } },
    })));
    socket.addEventListener('message', event => {
      let data;
      try { data = JSON.parse(event.data); } catch { return; }
      if (data.type === 'conversation_initiation_metadata' && !sent) {
        sent = true;
        socket.send(JSON.stringify({ type: 'user_message', text: question }));
      }
      if (data.type === 'ping') socket.send(JSON.stringify({ type: 'pong', event_id: data.ping_event.event_id }));
      if (data.type === 'agent_response') {
        const answer = data.agent_response_event?.agent_response || '';
        if (!answer.startsWith(greetingPrefix)) finish(null, answer);
      }
      if (data.type === 'client_error') finish(new Error('ElevenLabs conversation error'));
    });
    socket.addEventListener('error', () => finish(new Error('ElevenLabs connection error')));
    socket.addEventListener('close', () => { if (!finished) finish(new Error('ElevenLabs connection closed')); });
  });
}

export async function handler(request, response) {
  try {
    const path = new URL(request.url, `http://${request.headers.host}`).pathname;
    if (path === '/api/answer' && request.method === 'POST') {
      let raw = '';
      for await (const chunk of request) {
        raw += chunk;
        if (raw.length > 2000) {
          send(response, 413, JSON.stringify({ error: 'Question is too long.' }), 'application/json; charset=utf-8');
          return;
        }
      }
      let question;
      try { question = JSON.parse(raw).question?.trim(); } catch { /* handled below */ }
      if (!question || question.length > 1000) {
        send(response, 400, JSON.stringify({ error: 'Enter a shorter question.' }), 'application/json; charset=utf-8');
        return;
      }
      const answer = await answerQuestion(question);
      send(response, 200, JSON.stringify({ answer }), 'application/json; charset=utf-8');
      return;
    }
    if (request.method !== 'GET') {
      send(response, 405, 'Method not allowed', 'text/plain; charset=utf-8');
      return;
    }

    if (path === '/' || path === '/index.html') {
      send(response, 200, await readFile(join(directory, 'MVP', 'index.html')), 'text/html; charset=utf-8');
      return;
    }

    if (path === '/government' || path === '/government/') {
      send(response, 200, await readFile(join(directory, 'MVP', 'government.html')), 'text/html; charset=utf-8');
      return;
    }

    if (path === '/api/government') {
      const summary = await readFile(join(directory, 'Sources', 'government_demo_aggregates.json'));
      send(response, 200, summary, 'application/json; charset=utf-8');
      return;
    }

    if (path === '/api/content') {
      const content = await readFile(join(directory, 'Sources', 'hena_abu_dhabi_journeys.json'));
      send(response, 200, content, 'application/json; charset=utf-8');
      return;
    }

    if (path === '/api/signed-url') {
      if (!process.env.ELEVENLABS_API_KEY || !process.env.ELEVENLABS_AGENT_ID) {
        send(response, 503, JSON.stringify({ error: 'Voice is unavailable right now.' }), 'application/json; charset=utf-8');
        return;
      }
      const signedUrl = await getSignedUrl();
      send(response, 200, JSON.stringify({ signedUrl }), 'application/json; charset=utf-8');
      return;
    }

    send(response, 404, 'Not found', 'text/plain; charset=utf-8');
  } catch (error) {
    console.error(error);
    send(response, 500, JSON.stringify({ error: 'Something went wrong. Try again.' }), 'application/json; charset=utf-8');
  }
}

if (!process.env.VERCEL) createServer(handler).listen(port, '127.0.0.1', () => {
  console.log(`Hena is running at http://localhost:${port}`);
});
