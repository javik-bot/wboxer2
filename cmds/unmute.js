const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let choises = ["я разрешаю тебе говорить)",", Успокоился?","тебе повезло, мог быть и бан",
                    "на этот раз тише будь","Надёюсь такое не повторится"]
    let response = choises[Math.floor(Math.random() * choises.length)]
    // check if the command caller has permission to use the command
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("у вас нет прав");

    if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("у меня нет прав")

    //define the reason and unmutee
    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send("Пожалуйста, укажите пользователя для размута!");

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "нет причины"

    //define mute role and if the mute role doesnt exist then send a message
    let muterole = message.guild.roles.find(r => r.name === "Розбiйник")
    if(!muterole) return message.channel.send("У пользователя нет мута")

    //remove role to the mentioned user and also send the user a dm explaing where and why they were unmuted
    mutee.removeRole("muterole.id").then(() => {
        message.delete()
        mutee.send(`привет, ты был размьючен ${message.guild.name} причина: ${reason}`).catch(err => console.log(err))
        message.channel.send(`${mutee.user.username} ${response}`)
    })

    //send an embed to the modlogs channel
    let embed = new Discord.RichEmbed()
    .setColor("#0000FF")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Действие:", "размут")
    .addField("пользователь:", mutee.user.username)
    .addField("модератор:", message.author.username)
    .addField("причина:", reason)
    .addField("дата:", message.createdAt.toLocaleString())
    message.channel.send(embed);


};
module.exports.help = {
    name: "unmute"
};