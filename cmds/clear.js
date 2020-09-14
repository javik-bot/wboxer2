const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.delete()
    try{
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    if(args[0]>1000) return bot.send("Укажите значение меньше 1000");
    if(args[0]<2) return bot.send("Укажите значение больше 2");
    message.channel.bulkDelete(args[0]).then(() =>{
        message.channel.send(`Удалено ${args[0]} сообщений`).then(msg => msg.delete(15000));
    });
    bot.send(botmessage);
}catch(err){
    console.log(err.name)
}
};
module.exports.help = {
    name: "clear"
};