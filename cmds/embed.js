const Discord = module.require("discord.js");
const fs = require("fs");
const prem = ["652738644267892736","652738644267892736"]
module.exports.run = async (bot,message,args) => {
    let choises = ["иди нах.й! ты не купил премиум","Это только для премиум пользователей!","иди в жопу",
                    "плати за препиум и юзай эту команду","..."]
    let response = choises[Math.floor(Math.random() * choises.length)]
    if(!prem.includes(message.author.id)) return message.channel.send(response)
    let botmessage = args.join(" ");
    message.delete().catch();
        try{

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(`${message.author.tag} сказал:`, botmessage)
    .setFooter("(C) Copyright. Andrew Zex. Все права защищены")

    message.channel.send(embed)
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "embed"
};