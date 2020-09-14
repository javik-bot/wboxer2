const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('Генерация Кода Для Steam...').then(m => {
    	let choises = ['A','B','C','D','E','F','G','H','I','J','K','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']
        let response = choises[Math.floor(Math.random() * choises.length)]
        let response2 = choises[Math.floor(Math.random() * choises.length)]
        let response3 = choises[Math.floor(Math.random() * choises.length)]
        let response4 = choises[Math.floor(Math.random() * choises.length)]
        let response5 = choises[Math.floor(Math.random() * choises.length)]
        let response6 = choises[Math.floor(Math.random() * choises.length)]
        let response7 = choises[Math.floor(Math.random() * choises.length)]
        let response8 = choises[Math.floor(Math.random() * choises.length)]
        let response9 = choises[Math.floor(Math.random() * choises.length)]
        let response10 = choises[Math.floor(Math.random() * choises.length)]
        let response11 = choises[Math.floor(Math.random() * choises.length)]
        let response12 = choises[Math.floor(Math.random() * choises.length)]
        let response13 = choises[Math.floor(Math.random() * choises.length)]
        let response14 = choises[Math.floor(Math.random() * choises.length)]
        let response15 = choises[Math.floor(Math.random() * choises.length)]
        let response16 = choises[Math.floor(Math.random() * choises.length)]

        message.channel.send('Внимание, этот генератор кодов всего лишь шуточный и не имеет цели выдать рабочий код активации,\n а если и выпадет, то это чистая случайность')
        m.edit(`${response}${response2}${response3}${response4}-${response5}${response6}${response7}${response8}-${response9}${response10}${response11}${response12}-${response13}${response14}${response15}${response16}`)

    })
};
module.exports.help = {
    name: "steamkey"
};