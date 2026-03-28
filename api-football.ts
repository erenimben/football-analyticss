const API_BASE = 'https://v3.football.api-sports.io';
async function apiFetch(path: string) {
  const key = process.env.API_FOOTBALL_KEY;
  if (!key) return null;
  const response = await fetch(`${API_BASE}${path}`, { headers: { 'x-apisports-key': key }, next: { revalidate: 60 } });
  if (!response.ok) throw new Error(`API-Football request failed: ${response.status}`);
  return response.json();
}
export const fetchFixturesByDate = (date: string) => apiFetch(`/fixtures?date=${date}&timezone=Europe/Istanbul`);
export const fetchPredictions = (fixtureId: number) => apiFetch(`/predictions?fixture=${fixtureId}`);
export const fetchFixtureStats = (fixtureId: number) => apiFetch(`/fixtures/statistics?fixture=${fixtureId}`);
export const fetchLastFixtures = (teamId: number) => apiFetch(`/fixtures?team=${teamId}&last=5&timezone=Europe/Istanbul`);
export const fetchH2H = (homeId: number, awayId: number) => apiFetch(`/fixtures/headtohead?h2h=${homeId}-${awayId}&last=5`);
export const fetchOdds = (fixtureId: number) => apiFetch(`/odds?fixture=${fixtureId}`);
