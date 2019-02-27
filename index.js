const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot aktif!');
});

client.on('message', message => {
    if (message.startsWith("yaz") == true) {
        var newMessage = message.replace("yaz ", "");
        message.channel.send(message:newMessage)
    }
});

client.on('message', message => {
    if (message.content === 'amk') {
    	message.reply('küfür etmek çok yanlış bir davranış, sana hiç yakışmadı.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
