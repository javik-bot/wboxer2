const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let botmessage = args.join(" ");
    message.delete().catch();
    bot.send(botmessage);
};
module.exports.help = {
    name: "say"
};