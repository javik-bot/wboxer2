const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    try{

    let embed = new Discord.RichEmbed()
    .setTitle("Donate")
    .setDescription("тут ты можешь поддержать проект")
    .setColor('#0000FF')
    .addField("Qiwi",`1)https://qiwi.com/p/79507406004\n 2)https://qiwi.com/p/79000608468`)
    .addField("Yabdex Money","https://money.yandex.ru/bill/pay/DYzRcARoW1w.200813")
    .setFooter("(C) Copyright. Andrew Zex. Все права защищены")

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }
};
module.exports.help = {
    name: "donate"
};