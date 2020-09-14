const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
	if(message.author.id !== "652738644267892736") return message.channel.send("Это может делать только создатель бота!")
    message.channel.send('Тест Начался!').then(m => {
    	m.edit('25%').then(m => {
    		m.edit('50%').then(m => {
    			m.edit('75%').then(m => {
    				m.edit('100%').then(m => {
    					m.edit('Тест Завершён!')
    				})
    			})
    		})
    	})
    })
};
module.exports.help = {
    name: "test"
};