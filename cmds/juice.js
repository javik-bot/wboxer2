const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send(`${message.author} решил(-а) попить сок`);
};
module.exports.help = {
    name: "juice"
};