const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
	    try{

    let embed = new Discord.RichEmbed()
    .setTitle("Premium")
    .setDescription("Премиум подписка даётся навсегда")
    .setColor('#0000FF')
    .addField("Цена на премиум для одного пользователя составляет 10 ~~20~~ руб\nЦена на премиум для одного сервера состовляет 10 ~~20~~ руб\nКомплект \"Премиум кит\"(2 сервера и 1 пользователь) стоит всего  15 ~~25~~ руб",`Подробнее как получить спрашивайте у создателя бота (<@652738644267892736>)`)
    .addField('наш саппорт сервер всегда вас ждёт','https://discord.gg/sUVgFMq')
    .setFooter("(C) Copyright. Andrew Zex. Все права защищены")
	    message.channel.send(embed)
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }
};
module.exports.help = {
    name: "premium"
};