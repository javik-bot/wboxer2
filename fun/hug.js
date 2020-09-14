const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let kised =
  message.mentions.members.first() || message.guild.members.get(args[0])
args.slice(1).join(" ");
    if(!kised) kised = "себя"
        let choises = ["https://media.tenor.com/images/196de6a51828628c67324eb78fba8285/tenor.gif","https://media.tenor.com/images/d1d5efc07ab7a1a1ab4269b8a4d95121/tenor.gif","https://media.tenor.com/images/57559abb91934c8aaa325a71b0d01706/tenor.gif","https://media.tenor.com/images/5f5cc28bb3398605b9d1d2a5d18ebea3/tenor.gif"]
        let response = choises[Math.floor(Math.random() * choises.length)]
    message.channel.send('выбор гифки...').then(m => {
    m.edit(`вы обняли **${kised}**\n${response}`)
    })
};
module.exports.help = {
    name: "hug"
};