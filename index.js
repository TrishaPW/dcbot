const botconfig = require("./package.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} aktif edildi!`);

  bot.user.setActivity("19ROLEPLAY", {type: "WATCHING"});
});

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**[!]** Bu komutu kullanmak için yetkiniz bulunmamaktadır.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${args[0]} adet mesaj silindi.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "temizle"
}

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "yaz"
}

bot.login(process.env.BOT_TOKEN);
