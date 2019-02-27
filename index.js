const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot aktif!');
});

client.on('message', message => {
    if (message.content === '!yaz') {
    	message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(message.author.username + " says: " + args.join(" "));
		message.channel.send({embed})
  	}
});

client.on('message', message => {
    if (message.content === 'amk') {
    	message.reply('küfür etmek çok yanlış bir davranış, sana hiç yakışmadı.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
