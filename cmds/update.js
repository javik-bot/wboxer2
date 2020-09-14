const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
 	 message.channel.send(`Ты про мой апдейт? я не знаю когда у меня апдейт! \n это зависит от моего разраба!`);
};
module.exports.help = {
    name: "update"
};