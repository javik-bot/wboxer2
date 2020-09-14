const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
	if(message.guild.id !== "706873110410035253") return message.channel.send("Команда недоступна для этой гильдии,\nубедитесь что вы используете её на правильном сервере!")
    message.channel.send('WAAAGH!!!');
};
module.exports.help = {
    name: "orks"
};