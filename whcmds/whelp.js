const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
	if(message.guild.id !== "706873110410035253") return message.channel.send("Команда недоступна для этой гильдии,\nубедитесь что вы используете её на правильном сервере!")
	message.channel.send("я отправил список команд в ЛС")
	let embed = new Discord.RichEmbed()
	.setTitle("Справка")
	.setDescription("Команды для WARHAMMER COMMYNITY(rus)")
	.setColor("RANDOM")
	.addField("Список","1) imperium\n2) khrones\n3) lizardmens\n4) necrons\n5) nurglites\n6) slaaneshits\n7) tzeenchits\n8) orks")
	message.author.send(embed);
};
module.exports.help = {
    name: "whelp"
};