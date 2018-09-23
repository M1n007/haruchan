const TelegramBot = require('node-telegram-bot-api');
const token = '659199832:AAFs-MyQ-u0N3sCbeSJFczW6-ZxN_GEvNxs';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, msg.text.toString());
});