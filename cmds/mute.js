const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let choises = [", Заткнись!",", вот ты заткнулся, стало тише!","Ну? И что на этот раз?",
                    "Ты чё? хватит портить репутацию","Ооо, понтно...","Сам(-а) виноват(-а)!"]
    let response = choises[Math.floor(Math.random() * choises.length)]

    // check if the command caller has permission to use the command
	if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("у вас нет прав");

	if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("У меня нет прав")

//define the reason and mutee
	let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
	if(!mutee) return message.channel.send("Пожалуйста, укажите пользователя для мута!");

	let reason = args.slice(1).join(" ");
	if(!reason) reason = "Нет причины"

//define mute role and if the mute role doesnt exist then create one
	let muterole = message.guild.roles.find(r => r.name === "Розбiйник")
	if(!muterole) {
    try{
        muterole = await message.guild.createRole({
            name: "Розбiйник",
            color: "#FFFFFF",
            permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SEND_TTS_MESSAGES: false,
                ATTACH_FILES: false,
                SPEAK: false
            })
        })
    } catch(e) {
        console.log(e.stack);
    }
}

//add role to the mentioned user and also send the user a dm explaing where and why they were muted
	mutee.addRole(muterole.id).then(() => {
    	message.delete()
   		mutee.send(`Ты был заткнут на сервере ${message.guild.name} За: ${reason}`).catch(err => console.log(err))
    	message.channel.send(`${mutee.user.username} ${response}.`)
	})

//send an embed to the modlogs channel
	let embed = new Discord.RichEmbed()
	.setColor("#0000FF")
	.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
	.addField("Действие:", "Мут")
	.addField("Пользователь заткнут:", mutee.user.username)
	.addField("Модератор:", message.author.username)
	.addField("Причина:", reason)
	.addField("Дата:", message.createdAt.toLocaleString())
    message.channel.send(embed);

};
module.exports.help = {
    name: "mute"
};