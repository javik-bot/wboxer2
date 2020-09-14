const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let kised =
  message.mentions.members.first() || message.guild.members.get(args[0])
args.slice(1).join(" ");
    if(!kised) kised = "себя"
        let choises = ["https://media.tenor.com/images/82517b1fbf01e0db1c2636319e2c6965/tenor.gif","https://media.tenor.com/images/c2581a245fd651f65174b8a554b492ff/tenor.gif","https://media.tenor.com/images/333c4f19849451c7e1ddff454c9f9372/tenor.gif","https://media.tenor.com/images/777029607cf365f58e8b8ac57d548f19/tenor.gif","https://media.tenor.com/images/4f6c5ad80164566034ff4854761651bf/tenor.gif"]
        let response = choises[Math.floor(Math.random() * choises.length)]
    message.channel.send('выбор гифки...').then(m => {
    m.edit(`вы укусили **${kised}**\n${response}`)
    })
};
module.exports.help = {
    name: "bite"
};