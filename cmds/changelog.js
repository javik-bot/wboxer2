const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.delete()
        try{

    let embed = new Discord.RichEmbed()
    .setTitle("HUGS AND LOVE UPDATE!")
    .setDescription("Список изменений")
    .setColor('#0000FF')
    .addField("Мы сразу перешли к 1.18.1","Мне лень выкатывать снапшоты...")
    .addField("-ADDED","добавлена команда bite")
    .addField("-ADDED","добавлена категория premium и команды premium и embed")
    .addField('-REMOVED','удалена категория NSFW')
    .setFooter("создателю охота кушоц, любви и ласки")

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }
};
module.exports.help = {
    name: "changelog"
};