const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
        function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1 ,'0')} дней, ${hrs.padStart(2 ,'0')} часов, ${min.padStart(2 ,'0')} минут, ${sec.padStart(2 ,'0')} секунд`

    }
    try{

    let embed = new Discord.RichEmbed()
    .setTitle("О боте")
    .setDescription("AMEI BOT - новый бот-модератор для Discord")
    .setColor("#0000FF")
    .addField(`Имя бота`,`${bot.user.username}`)
    .addField("Тэг бота",`${bot.user.tag}`)
    .addField('ID бота',`${bot.user.id}`)
    .addField('Инвайт бота','https://discordapp.com/oauth2/authorize?client_id=712763240270004236&permissions=8&scope=bot')
    .addField('сервер поддежки','https://discord.gg/6HMq9Kg')
    .addField("Количество команд",`44`)
    .addField("Бот в сети",duration(bot.uptime))  .setThumbnail(bot.user.avatarURL)
    .setFooter('©Copyright. Andrew Zex. Все права защищены.')
    message.channel.send(embed)
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }
};
module.exports.help = {
    name: "botinfo",
};