const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('получение ссылки.').then(m => {
    	m.edit('получение ссылки..').then(m => {
    		m.edit('получение ссылки...').then(m => {
    			m.edit('получение ссылки.').then(m => {
    				m.edit('получение ссылки..').then(m => {
    					m.edit('получение ссылки...').then(m => {
    						m.edit('https://i.imgur.com/w3duR07.png')
    					})
    				})
    			})
    		})
    	})
    }) 
};
module.exports.help = {
    name: "rip"
};