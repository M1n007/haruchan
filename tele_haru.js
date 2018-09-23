const TelegramBot = require('node-telegram-bot-api');
const token = '659199832:AAFs-MyQ-u0N3sCbeS]';
const bot = new TelegramBot(token, { polling: true });
const fetch = require('node-fetch');
const request = require('request');

const simsimiKey = 'cc09e04a-62db-492d-b3b1';
const url = `http://sandbox.api.simsimi.com/request.p?key=${simsimiKey}&lc=id&ft=1.0&text=`;

// async function getSholat(){
//     await fetch('http://muslimsalat.com/jakarta.json?key=bd099c5825cbedb9aa934e255a81a5fc')
//             .then(resp => resp.json())
//             .then(respo => {
//                 respo.items[0]
//             })
// }


bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    request(url + msg.text.toString(), (err, response, body) => {
        bot.sendMessage(chatId, JSON.parse(body).response);
    });

    // if (msg.text.toString() == "jadwal sholat") {
    //     bot.sendMessage(chatId, "ini jadwal sholat sekarang ka "+JSON.parse(getSholat()));
    // }

    if (msg.text.toString() === "/start") {
        bot.sendMessage(chatId, "Terimakasih telah menambahkan ku sebagai teman ^_^, semoga aku bisa membuat hari harimu lebih menyenangkan.");
        bot.sendAudio(chatId, 'haru.mp3')
    }
});

