const axios = require('axios');

async function fetchAirdrops() {
  // مثال: scrape صفحه اصلی ایردراپ CoinMarketCap (API رسمی ندارد)
  // برای نمونه وضعیت تستی ایجاد می‌شود
  try {
    const { data } = await axios.get('https://api.coinstats.app/public/v1/airdrops');
    if(Array.isArray(data?.airdrops)) {
      return data.airdrops.slice(0, 3).map(d => ({
        title: d.title,
        description: d.description || '-',
        url: d.url
      }));
    }
    return [];
  } catch (e) {
    return [{ title: 'Airdrop Example', description: 'نمونه ایردراپ', url: '#' }];
  }
}

// ذخیره در دیتابیس پروژه Node/Drizzle
async function addToDb(db, airDrop) {
  await db.insert('air_drops').values({
    title: airDrop.title,
    description: airDrop.description,
    status: 'active',
    created_at: new Date()
  });
}

module.exports = { fetchAirdrops, addToDb };
