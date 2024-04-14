// import TelegramBot from "node-telegram-bot-api"
import { Telegraf } from "telegraf"

import express from 'express'

const token = '7138409167:AAGCQ-0w101zQYtLYxsxlvdUtwiEYGgF_yI';

const webUrl = "https://gorgeous-dusk-a3880d.netlify.app/"
//t.me/testo_ax_my_bot


const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.hears('hi', (ctx) => ctx.reply('Hey there'))




bot.start((ctx) => ctx.reply('Welcome'))

const commands = [
  {

    command: "menu",
    description: "меню"

  },
  {

    command: "start",
    description: "Запуск бота"

  },
  {

    command: "ref",
    description: "Получить реферальную ссылку"

  },
  {

    command: "help",
    description: "Раздел помощи"

  },

]

bot.telegram.setMyCommands(commands);
bot.on('message', async (msg) => {
  const text = msg.message.text
  const chatId = msg.chat.id
  // console.log(msg)

  if (msg.text == '/menu') {

    await bot.telegram.sendMessage(msg.chat.id, `Меню бота`, {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Кнопка 1', web_app: { url: webUrl } }],
          [{ text: 'Кнопка 2', callback_data: 'data 2' }],
          [{ text: 'Кнопка 3', callback_data: 'text 3' }]
        ]
      }


    })

  }
  else if (msg.text == "1") {
    bot.telegram.sendMessage(msg.chat.id, `бан`)
  }
});


let urlHook = "https://api.render.com/deploy/srv-coe2nd20si5c7399vn80?key=yfiCbOiZj9w"
// bot.telegram.setWebhook(urlHook + "/bot" + `${token}`)
// bot.startWebhook(urlHook + "/bot" + `${token}`, null, 8800)

bot.launch({
  webhook: {
    // Public domain for webhook; e.g.: example.com
    domain: urlHook,

    // Port to listen on; e.g.: 8080
    port: 3001,

    // Optional path to listen for.
    // `bot.secretPathComponent()` will be used by default
    // path: urlHook + "/bot" + `${token}`,

    // Optional secret to be sent back in a header for security.
    // e.g.: `crypto.randomBytes(64).toString("hex")`
    // secretToken: randomAlphaNumericString,
  },
});