import TelegramBot from "node-telegram-bot-api"

import express from 'express'

const token = '7138409167:AAGCQ-0w101zQYtLYxsxlvdUtwiEYGgF_yI';

const webUrl = "https://gorgeous-dusk-a3880d.netlify.app/"
//t.me/testo_ax_my_bot


const bot = new TelegramBot(token);
let urlHook = "https://api.render.com/deploy/srv-codtor0l6cac73bqc05g?key=8ExSdyDod9E"
bot.setWebHook(urlHook + "bot" + `${token}`)
bot.startWebHook(urlHook + "bot" + `${token}`, null, 4000)

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

bot.setMyCommands(commands);
bot.on('message', async (msg) => {
  const text = msg.text
  const chatId = msg.chat.id
  console.log(msg)

  if (msg.text == '/menu') {

    await bot.sendMessage(msg.chat.id, `Меню бота`, {
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
    bot.sendMessage(msg.chat.id, `бан`)
  }
});