const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
const axios = require('axios');


dotenv.config();
const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

// bot.on('message', (option) => {
//     console.log("Message received on the bot", option);

//     bot.sendMessage(option.chat.id, "Hello, I am a bot. I am here to help you with your queries. Please type /help to know more about me.");

// });

bot.onText(/\/joke/, async (option) => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');

    console.log(response.data);

    const setup = response.data.setup;
    const punchline = response.data.punchline;

    bot.sendMessage(option.chat.id, setup + " ,  " + punchline);
});