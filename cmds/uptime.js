const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('Поиск команды.').then(m =>{
    m.edit('Поиск команды..').then(m => {
    m.edit('Поиск команды...').then(m => {
    m.edit(`Команда была перенесена в команду \`.botinfo\` в строку **бот в сети**`)
    })
    })
    })
};
module.exports.help = {
    name: "uptime"
};