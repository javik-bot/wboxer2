const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
              let mbr = message.mentions.members.first() || message.member;
                    if (mbr){
    let embed = new Discord.RichEmbed()
    .setAuthor(mbr.user.tag)
    .setDescription("Информация о пользователе")
    .setColor('#10c7e2')
    .addField("Имя",mbr.user.tag)
    .addField("Тэг",mbr.user.tag)
    .addField("Дискриминатор",mbr.user.discriminator)
    .addField("Создание аккаунта",mbr.user.createdAt.toLocaleString())
    .addField("ID",mbr.user.id)
    .addField("Вы бот?",mbr.user.bot)
    .setThumbnail(mbr.user.avatarURL)
    .setFooter("(C) Copyright. Andrew Zex. Все права защищены")

    bot.send(embed);
              }
              else message.reply("You need mention user.");
};
module.exports.help = {
    name: "userinfo"
};