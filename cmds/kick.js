const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("У вас нет прав")

    let kickMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!kickMember) return message.channel.send("Выбери пользователя для кика!")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "нет причины!"

    if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("У меня нет прав")

    kickMember.send(`Ты был выпнут с сервера ${message.guild.name} за: ${reason}`).then(() =>
    kickMember.kick()).catch(err => console.log(err))

    message.channel.send(`**${kickMember.user.tag}** выпнут`).then(m => m.delete(5000))

    let embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Действие:", "Кик")
    .addField("Пользователь:", kickMember.user.username)
    .addField("Модератор:", message.author.username)
    .addField("Причина:", reason)
    .addField("Дата:", message.createdAt.toLocaleString())


};
module.exports.help = {
    name: "kick"
};