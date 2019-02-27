const botconfig = require("./package.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} aktif edildi!`);

  bot.user.setActivity("19ROLEPLAY", {type: "WATCHING"});
});

bot.login(process.env.BOT_TOKEN);
