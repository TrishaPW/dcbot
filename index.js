const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot aktif!');
});

client.on('message', message => {
    if (message.content === '!yaz') {
    	const sayMessage = args.join(" ");
    	message.delete().catch();
    	message.channel.send(sayMessage);
  	}
});

client.on('message', message => {
    if (message.content === 'amk') {
    	message.reply('küfür etmek çok yanlış bir davranış, sana hiç yakışmadı.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
