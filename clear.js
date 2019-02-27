const Discord = require("discord.js");

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
