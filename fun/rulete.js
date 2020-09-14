const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let choises = [":heart:тебе повезло, ты выжил(-а)!",":heart:тебе повезло, ты выжил(-а)!",":heart:тебе повезло, ты выжил(-а)!",":heart:тебе повезло, ты выжил(-а)!",":heart:тебе повезло, ты выжил(-а)!",":heart:тебе повезло, ты выжил(-а)!",":heart:тебе повезло, ты выжил(-а)!",":skull_crossbones:Ты мертв(-а)!:skull_crossbones: "]
    let response = choises[Math.floor(Math.random() * choises.length)]
    message.channel.send(":clock12:идёт ход.").then(m => {
    	m.edit(':clock3:идёт ход..').then(m => {
    		m.edit(':clock6:идёт ход...').then(m => {
    			m.edit(response)
    		})
    	})
    })
};
module.exports.help = {
    name: "ruroulette"
};