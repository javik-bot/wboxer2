const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("У тебя нет прав!")

    let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return message.channel.send("Выбери пользователя для разбана!")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "нет причины!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("У меня нет прав")|
    message.delete()
    try {
        message.guild.ban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag} Ты был разбанен на сервере!`)
    } catch(e) {
        console.log(e.message)
    }

    let embed = new Discord.RichEmbed()
    .setColor(colours.redlight)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Действие:", "разбан")
    .addField("пользователь:", `${bannedMember.username} (${bannedMember.id})`)
    .addField("Модератор:", message.author.username)
    .addField("Причина:", reason)
    .addField("Дата:", message.createdAt.toLocaleString())

    message.channel.send(embed);

};
module.exports.help = {
    name: "ban"
};