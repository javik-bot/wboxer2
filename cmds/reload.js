const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(message.author.id !== "652738644267892736") return message.channel.send("Это может делать только создатель бота!")

    if (!args[0]) return message.channel.send("Выбери команду для рестарта!")

    let commandName = args[0].toLowerCase()

    try {
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`Я не могу перезагрузить команду \`${args[0].toUpperCase()}\``)
    }

    message.channel.send(`Комманда \`${args[0].toUpperCase()}\` перезагружена`)

}
module.exports.help = {
    name: "reload"
};