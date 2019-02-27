const Discord = require('discord.js');
const Client = new Discord.Client();
const OwnerID = "130515926117253122";
const prefix  "!"

Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `Hello world`, type: 0} });
});

Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "ping") {
		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`);
	} else

	if (command === "yaz") {
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(message.author.username + " says: " + args.join(" "));
		message.channel.send({embed})
	} else

});
Client.login(process.env.BOT_TOKEN);
