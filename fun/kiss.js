const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let kised =
  message.mentions.members.first() || message.guild.members.get(args[0])
args.slice(1).join(" ");
    if(!kised) kised = "себя"
        let choises = ["https://media.tenor.com/images/39fe167bdab90223bcc890bcb067b761/tenor.gif","https://tenor.com/view/flying-kiss-cat-lips-long-eyelashes-gif-7332151","https://media.tenor.com/images/cd4582aea4d353f63a21173dc9b7f473/tenor.gif","https://media.tenor.com/images/a60e417c872f1e83aa3c2da252bab861/tenor.gif"]
        let response = choises[Math.floor(Math.random() * choises.length)]
    message.channel.send('выбор гифки...').then(m => {
    m.edit(`вы поцеловали **${kised}**\n${response}`)
    })
};
module.exports.help = {
    name: "kiss"
};