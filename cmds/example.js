//это команда, на основе которой были созданы другие команды, как .help, .хелп и екоторые другие
const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(message.author.id !== "652738644267892736") return message.channel.send("Эту команду может использовать только создатель бота")
    message.channel.send('Ты нашёл(-а) тестовую команду, которая скрыта от всех');
};
module.exports.help = {
    name: "example"
};