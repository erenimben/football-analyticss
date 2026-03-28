# Match Insight AI Live

Gerçek API bağlantılı futbol analiz arayüzü.

## Özellikler
- Bugünkü tüm maçları API-Football üzerinden çeker
- Lig filtresi
- Son 5 maç formu
- H2H kartları
- Oran, tahmin ve oran benzerliği kartları
- Canlı maçlarda 60 saniyede bir otomatik yenileme
- API anahtarı yoksa fallback demo veri

## Kurulum
```bash
npm install
cp .env.example .env.local
npm run dev
```

`.env.local` içine şunu yaz:
```bash
API_FOOTBALL_KEY=senin_api_anahtarin
```

## Vercel
1. GitHub'a yükle.
2. Vercel ile import et.
3. Environment Variables kısmına `API_FOOTBALL_KEY` ekle.
4. Deploy et.

## Not
Bu proje bahis oynatma veya kupon oluşturma özelliği içermez. Futbol verilerini içgörü paneli şeklinde gösterir.
