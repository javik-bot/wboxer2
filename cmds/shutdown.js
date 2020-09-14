const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(message.author.id !== "652738644267892736") return message.channel.send("Это может делать только создатель бота!")

	try {
		await message.channel.send("Бот выключается")
		process.exit()
	} catch(e) {
		message.channel.send(`ОШИБКА: ${e.message}`)
	}
  console.log("бот выклбчен с помощью команды shutdown")
};
module.exports.help = {
    name: "shutdown"
};