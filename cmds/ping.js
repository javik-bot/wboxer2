const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('Проверка пинга...').then(m => {
    	let ping = m.createdTimestamp - message.createdTimestamp
    	let choises = ["Это мой реальный пинг","Это нормально? я думаю надо бы тебе проверить пинг!","Я думаю это нормально)"]
        let response = choises[Math.floor(Math.random() * choises.length)]

        m.edit(`${response}: Задержка бота: ${ping}, Задержка API: ${Math.round(bot.ping)}`)
    })
};
module.exports.help = {
    name: "ping"
};