require('dotenv').config();
//console.log(process.env.DISCORDJS_BOT_TOKEN);

//
const {
  Client
} = require('discord.js');
const bot = new Client(); //Creates an instance of the Client Class refrenced above
const cmdPrefix = "!";

// Logs a message when the bot logs into the server
bot.on('ready', () => {
  console.log('Bot: ' + `${bot.user.username}` + ' has Logged in');
  bot.channels.cache.get('751131553614004327').send('Hello here!');
});
//If new User comes in send this message
bot.on('guildMemberAdd', (member) => {

  if (member.user.bot) return; //Checks to see if the new user is a bot
  console.log("@" + member.displayName); //Logs the new User
  // Sends a message to the channel welcoming the new user
  bot.channels.cache.get('751131553614004327').send(
      `Welcome ${member.user},\r
    \tCheck your DMs for a list of things to do for new users`)
    .then(channel => console.log(channel.name))
    .catch(console.error);

  //Dms the new User with a list of instructions
  member.send(`

    Welcome again to our -Club Name- family ${member.displayname},\n
    \tAs a new member there are a few things that we need you to do.\n
    1. Introduce yourself to the chat by saying hello, your major, and some of your hobbies and intrest\n
    2. Check out our channels
    `);
})

// Commands
//!officers
//
bot.on('message', (message) => {
  //console.log(message.author.tag + ":  "+ message.content);

  if (message.author.bot) return; //Makes sure the message is from a user not a bot, prevents bots responding to bot messages

  if (message.content.startsWith(cmdPrefix)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(cmdPrefix.length)
      .split("/\s+/");
    console.log(CMD_NAME);
    //console.log(args);
    if (CMD_NAME === "president") {
      message.channel.send('New President has been set');
      console.log('New President has been set to user');
    }


    if (CMD_NAME === "officers") {
      message.channel.send('Test Response');
    }
    //message.channel.send('Test Response');
  }

})

//This Logs your bot into Discord
bot.login(process.env.DISCORDJS_BOT_TOKEN);
