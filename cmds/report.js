const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {

	message.delete()
	let target = message.mentions.members.first() || message.guild.members.get(args[0])
	if(!target) return message.channel.send("Пользователь не найден!").then(m => m.delete(30000))

	let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send(`Укажите причину для подачи жалобы на **${target.user.tag}**!`).then(m => m.delete(30000))

    let sChannel = message.guild.channels.find(x => x.name === "reports")

	sChannel.send(`Пользователь **${message.author.tag}** подал репорт на **${target.user.tag}** по причине **${reason}**`).then(async msg => {
		await msg.react("✅")
		await msg.react("❌")
	})

};
module.exports.help = {
    name: "report"
};