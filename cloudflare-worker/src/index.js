const cors = { 'Access-Control-Allow-Origin':'https://davidmarinkovic.github.io', 'Access-Control-Allow-Methods':'GET, OPTIONS', 'Access-Control-Allow-Headers':'Content-Type' };
const reply = (body, status=200) => new Response(JSON.stringify(body), { status, headers:{...cors,'Content-Type':'application/json; charset=utf-8'} });
export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') return new Response(null,{headers:cors});
    const url = new URL(request.url);
    if (request.method !== 'GET' || url.pathname !== '/verse') return reply({error:'Route introuvable'},404);
    const reference = url.searchParams.get('ref') || '';
    return reply({error:'Le site consulte désormais free.bible directement, sans Worker ni token.', reference},410);
  }
};
