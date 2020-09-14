const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('введена команда music').then(m => {
    	m.edit('поиск команды.').then(m => {
    		m.edit('поиск команды..').then(m => {
    			m.edit('поиск команды...').then(m => {
    				m.edit('поиск команды.').then(m => {
    					m.edit('поиск команды..').then(m => {
    						m.edit('поиск команды...').then(m => {
    							m.edit('комманда не найдена или больше не разрабатывается').then(m => m.delete(40000))
    						})
    					})
    				})
    			})
    		})
    	})
    })
    console.log("Ошибка при выполнении команды! команда не работает из-за технической ошибки или сбоя в системе, пожалуйста устраните ошибку!")
};
module.exports.config = {
    name: "music",
  aliases: ['музик','музыка']
};