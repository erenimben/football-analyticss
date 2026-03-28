import { DashboardData } from './types';

export const demoDashboard: DashboardData = {
  generatedAt: new Date().toISOString(),
  source: 'demo-fallback',
  coverageText: 'Demo verisi gösteriliyor. API anahtarı eklendiğinde bugünkü ligler otomatik çekilir.',
  topInsights: [
    { label: 'Günün En Güçlü 5 İçgörüsü', value: '5 seçim otomatik sıralanır' },
    { label: 'Oran Anomalisi Yakalama', value: 'Benzer oranlı geçmiş maç taraması' },
    { label: 'AI Yorum Yazarı', value: 'Her maç için açıklama üretir' },
    { label: 'Canlı Uyarı Paneli', value: 'Gol geliyor / tempo yükseldi bildirimleri' }
  ],
  alertFeed: [
    '63. dakika: Liverpool maçında xG farkı açıldı, sıradaki gol ev sahibine yakın.',
    '27. dakika: Sociedad maçında tempo düşük, ilk yarı düşük skor senaryosu önde.',
    'Maç önü: Galatasaray için iç saha kazanır modeli %88 güven üretti.'
  ],
  matches: [
    {
      id: 1,
      league: 'Premier League',
      country: 'İngiltere',
      kickoff: '20:30',
      home: 'Liverpool',
      away: 'Brighton',
      last5Home: ['G', 'G', 'B', 'G', 'G'],
      last5Away: ['M', 'B', 'G', 'M', 'B'],
      h2h: ['3-1', '2-2', '2-1', '3-3', '1-0'],
      odds: { home: 1.62, draw: 4.1, away: 5.25, over25: 1.55, bttsYes: 1.72 },
      historicalByOdds: { home: 61, draw: 22, away: 17, sample: 248 },
      venueTrend: { homeWin: 68, draw: 18, awayWin: 14 },
      prediction: {
        matchResult: 'Ev sahibi kazanır',
        over25: '2.5 Üst',
        btts: 'KG Var',
        firstHalfGoal: 'İlk yarı gol olur',
        confidence: 84,
        commentary: 'Ev sahibi formu ve hücum üretimi güçlü. Benzer oran profillerinde iç saha kazanma frekansı yüksek.',
        anomaly: 'Piyasa ev sahibini güçlü görüyor, ancak KG Var oranı halen dikkat çekiyor.'
      },
      live: {
        minute: 63,
        score: '1-0',
        xg: '1.92 - 0.71',
        shots: '13 - 6',
        possession: '%58 - %42',
        danger: 'Gol beklentisi artıyor, sıradaki gol için ev sahibi önde.'
      }
    },
    {
      id: 2,
      league: 'Süper Lig',
      country: 'Türkiye',
      kickoff: '19:00',
      home: 'Galatasaray',
      away: 'Kasımpaşa',
      last5Home: ['G', 'G', 'G', 'B', 'G'],
      last5Away: ['G', 'M', 'B', 'M', 'G'],
      h2h: ['2-1', '1-0', '3-2', '2-2', '1-1'],
      odds: { home: 1.44, draw: 4.55, away: 6.9, over25: 1.5, bttsYes: 1.88 },
      historicalByOdds: { home: 66, draw: 20, away: 14, sample: 191 },
      venueTrend: { homeWin: 74, draw: 16, awayWin: 10 },
      prediction: {
        matchResult: 'Ev sahibi kazanır',
        over25: '2.5 Üst',
        btts: 'KG Yok',
        firstHalfGoal: 'İlk yarı gol olur',
        confidence: 88,
        commentary: 'İç saha baskısı ve oran seti ev sahibini öne taşıyor. Deplasman savunma kırılganlığı dikkat çekiyor.',
        anomaly: 'Beraberlik oranı piyasa ortalamasına göre hafif şişkin; erken gol senaryosu dengeyi bozabilir.'
      }
    },
    {
      id: 3,
      league: 'La Liga',
      country: 'İspanya',
      kickoff: '22:00',
      home: 'Real Sociedad',
      away: 'Villarreal',
      last5Home: ['B', 'G', 'M', 'G', 'B'],
      last5Away: ['G', 'B', 'G', 'M', 'G'],
      h2h: ['1-1', '0-1', '2-2', '1-0', '1-1'],
      odds: { home: 2.35, draw: 3.1, away: 3.0, over25: 2.02, bttsYes: 1.8 },
      historicalByOdds: { home: 39, draw: 31, away: 30, sample: 312 },
      venueTrend: { homeWin: 48, draw: 28, awayWin: 24 },
      prediction: {
        matchResult: 'Beraberlik veya ev sahibi',
        over25: '2.5 Alt',
        btts: 'KG Var',
        firstHalfGoal: 'İlk yarı gol olmaz',
        confidence: 67,
        commentary: 'Dengeli oran yapısı ve geçmiş eşleşmeler düşük tempoya işaret ediyor. İki takım da kontrollü başlayabilir.',
        anomaly: '2.5 Alt tarafı modelde piyasaya göre biraz daha değerli görünüyor.'
      },
      live: {
        minute: 27,
        score: '0-0',
        xg: '0.41 - 0.38',
        shots: '4 - 5',
        possession: '%49 - %51',
        danger: 'Şu an düşük tempo. İlk yarı düşük skor senaryosu güçlü kalıyor.'
      }
    }
  ]
};
