const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.MessageEmbed()
    .setDescription("Информация о сервере")
    .setColor('#10c7e2')
    .addField("Название сервера",message.guild.name)
    .addField("Создание сервера",message.guild.createdAt)
    .addField("ID сервера",message.guild.id)
    .addField("Вы присоеденились к серверу",message.guild.joinedAt)
    .addField("Кол-Во участников",message.guild.memberCount)
      .addField('партнёрский сервер?', message.guild.partnered, true)
      .addField('верифицированный сервер?', message.guild.verified, true)
    .addField("Регион",message.guild.region)
    .setThumbnail(message.guild.iconURL)

    bot.send(embed);

};
module.exports.help = {
    name: "serverinfo"
};