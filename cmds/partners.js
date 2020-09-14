const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    try{

    let embed = new Discord.RichEmbed()
    .setTitle("Партнёры!")
    .setDescription("Это список партнёров, помогавших в разработке бота")
    .setColor('#00ff56')
    .addField("*A Simple Developer Zone*","https://discord.gg/6HMq9Kg")
    .addField("*AZT Books Team|Remake*","https://discord.gg/7hzFZ5y")
    .addField("AMEI BOT| официальный сайт","В разработке")
    .addField("MiTask BOT| официальный сайт","http://bot.mitask.space")
    .setFooter("Тут может оказаться ваш сервер, если вы будете активно помогать боту")

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }
};
module.exports.help = {
    name: "partners"
};