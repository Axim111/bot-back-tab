// import TelegramBot from "node-telegram-bot-api"
import { Telegraf } from "telegraf"

import express from 'express'

const token = '7138409167:AAGCQ-0w101zQYtLYxsxlvdUtwiEYGgF_yI';

const webUrl = "https://gorgeous-dusk-a3880d.netlify.app/"
//t.me/testo_ax_my_bot


const bot = new Telegraf(token);






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



let urlHook = "https://api.render.com/deploy/srv-codtor0l6cac73bqc05g?key=8ExSdyDod9E"
bot.telegram.setWebhook(urlHook + "/bot" + `${token}`)
bot.startWebhook(urlHook + "/bot" + `${token}`, null, 8800)