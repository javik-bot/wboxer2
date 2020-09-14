const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    	let choises = ["лови стол!","осторожно, в тебя летит стол","Лови! но осторожно, не лови лицом"]
        let choisess = ["(╯°□°）╯︵ ┻━┻", "(ノಠ益ಠ)ノ彡┻━┻", "(ﾉ´･ω･)ﾉ ﾐ ┻━┻"]
        let response = choises[Math.floor(Math.random() * choises.length)]
        let response2 = choisess[Math.floor(Math.random() * choisess.length)]

    message.channel.send(`${response} ${response2}`);
};
module.exports.help = {
    name: "table"
};