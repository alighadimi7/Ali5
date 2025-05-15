const cron = require('node-cron');
const { fetchAirdrops, addToDb } = require('../server/services/scraperService/scrapers/coinMarketCapScraper');
const { sendTelegramMessage } = require('../server/services/telegramService');
require('dotenv').config({ path: '../.env' });

// هر روز ساعت 10 صبح (UTC)
cron.schedule('0 10 * * *', async () => {
  console.log('Running scheduled sync...');
  const list = await fetchAirdrops();
  for (const ad of list) {
    // ذخیره تستی (نیاز به db واقعی)
    // await addToDb(db, ad);
    await sendTelegramMessage(process.env.TELEGRAM_BOT_TOKEN, process.env.TELEGRAM_CHANNEL_ID, `<b>ایردراپ جدید:</b>\n${ad.title}`);
  }
  console.log('Sync finished.');
});

console.log('Scheduler running...');
