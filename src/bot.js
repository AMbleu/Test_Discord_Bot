require('dotenv').config();
//console.log(process.env.DISCORDJS_BOT_TOKEN);

const { Client } = require('discord.js');

const bot = new Client();

bot.login(process.env.DISCORDJS_BOT_TOKEN);
 
