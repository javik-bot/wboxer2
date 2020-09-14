const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send(`кол-во участников на сервере: ${message.guild.memberCount}\nID Сервера \`${message.guild.id}\``)
};
module.exports.help = {
    name: "membercount"
};