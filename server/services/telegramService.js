const axios = require('axios');

async function sendTelegramMessage(botToken, chatId, text, extra = {}) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try {
    const res = await axios.post(url, {
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      ...extra
    });
    return res.data;
  } catch (err) {
    console.error('Telegram Error', err?.message || err);
    return null;
  }
}

module.exports = { sendTelegramMessage };
