const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let botmessage = args.join(" ")
    message.delete()
    message.channel.send(`recovering \`${botmessage}\``).then(m => {
    	m.edit('\`10%\`').then(m => {
    		m.edit('\`25%\`').then(m => {
    			m.edit('\`50%\`').then(m => {
    				m.edit('\`75%\`').then(m => {
    					m.edit('\`99%\`').then(m => {
    						m.edit('\`99.9%\`').then(m => {
    							m.edit('\`100%\`').then(m => {
                                    m.edit(`recovery \`${botmessage}\` completed`).then(m => m.delete(40000))
                                })
    						})
    					})
    				})
    			})
    		})
    	})
    })
};
module.exports.help = {
    name: "recovery"
};