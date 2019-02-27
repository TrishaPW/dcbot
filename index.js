const botconfig = require("./package.json");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot aktif edildi.');
});

client.on('message', message => {
    if (message.content === '!yaz')
    {
        const sayMessage = args.join(" ");
        message.delete().catch();
        message.channel.send(sayMessage);
  	}
});
client.login(process.env.BOT_TOKEN);
