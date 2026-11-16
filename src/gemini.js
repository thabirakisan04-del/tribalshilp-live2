const API_ROOT = 'https://generativelanguage.googleapis.com/v1beta/models';
const MODEL = 'gemini-1.5-flash';

function apiKey() {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  if (!key) throw new Error('Gemini is not configured yet. Add VITE_GEMINI_API_KEY to your .env file, then restart the app.');
  return key;
}

async function requestGemini(contents) {
  const key = apiKey();
  const response = await fetch(`${API_ROOT}/${MODEL}:generateContent?key=${encodeURIComponent(key)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents, generationConfig: { temperature: 0.45, maxOutputTokens: 700 } }),
  });
  if (!response.ok) {
    let detail = '';
    try { detail = (await response.json()).error?.message || ''; } catch { /* response may not be JSON */ }
    if (response.status === 401 || response.status === 403) throw new Error('Gemini rejected this API key. Check that it is valid and enabled for the Generative Language API.');
    throw new Error(detail || `Gemini request failed (${response.status}). Please try again.`);
  }
  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.map((part) => part.text || '').join('').trim();
  if (!text) throw new Error('Gemini returned no answer. Please try asking in a different way.');
  return text;
}

export async function askGemini(question) {
  return requestGemini([{ role: 'user', parts: [{ text: `You are a respectful guide to India's diverse tribal communities. Answer accurately, avoid generalizing distinct communities, and flag uncertainty. User question: ${question}` }] }]);
}

export async function analyzeLeaf(base64Image, mimeType = 'image/jpeg') {
  const prompt = 'Analyze this crop leaf. Identify the disease, confidence percentage, and organic home remedies. Format clearly in Odia (ଓଡ଼ିଆ) and English.';
  return requestGemini([{ role: 'user', parts: [{ text: prompt }, { inline_data: { mime_type: mimeType, data: base64Image } }] }]);
}
