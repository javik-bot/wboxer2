const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let choises = ["как говорил Реван: \`Бан Нахой\`","Эхх, если бы ты не нарушал(-а) правила, то скорее всего был(-а) бы с нами","Ну? И что на этот раз?",
                    "Тут что-то есть...","Ооо, понтно...","Сам(-а) виноват(-а)!"]
    let response = choises[Math.floor(Math.random() * choises.length)]
    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("У вас нет прав")

    let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!banMember) return message.channel.send("пожалуйста, укажите пользователя для софт бана!")

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "нет причины!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("У меня нет прав")

    banMember.send(`ты был забанен ${message.guild.name} за: ${reason}`).then(() =>
    message.guild.ban(banMember, { days: 1, reason: reason})).then(() => message.guild.unban(banMember.id, { reason: "Softban"})).catch(err => console.log(err))

    message.channel.send(`**${banMember.user.tag}** получил Софтбан`)

    let embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Действие:", "Софтбан")
    .addField("Пользователь:", banMember.user.username)
    .addField("Модератор:", message.author.username)
    .addField("Причина:", reason)
    .addField("Дата:", message.createdAt.toLocaleString())
    .addField("Умные слова",`${response}`)

    message.channel.send(embed);
};
module.exports.help = {
    name: "softban"
};