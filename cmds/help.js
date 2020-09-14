const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send("Я отправил справку в ЛС")
    try{

    let embed = new Discord.RichEmbed()
    .setDescription("Справка")
    .setColor('RANDOM')
    .addField(":man_police_officer:КОМАНДЫ АДМИНИСТРАЦИИ:man_police_officer:",`1) ban @user\n2) clear (число)\n3) kick @user\n4) mute @user time\n5) say\n6) unmute\n7) unwarn\n8) warn\n9) softban`)
    .addField(":page_with_curl: ОБЩИЕ КОМАНДЫ:page_with_curl:",`1) help\n2) serverinfo\n3) userinfo\n4) changelog\n5) donate\n6) хелп\n7) membercount\n8) report <user> <reason>\n9) botinfo\n10) ruroulette`)
    .addField(":pen_ballpoint:ПРОЧИЕ КОМАНДЫ:pen_ballpoint:",`2) ping\n3) uptime\n4) partners\n6) update`)
    .addField(':space_invader:FUN:space_invader:','1) coinflip\n2) juice\n3) recovery\n4) music\n5) ruroulette\n6) rip\n7) nitro\n8) steamkey\n9) mcode\n10) table\n11) kiss\n12) hug\n13) bite')
    .addField(":yen:Premium:yen:","1) premium\n2)embed")
    .addField(":crossed_swords:WARHAMMER COMMYNITY(RUS):crossed_swords:\nCOMMANDS","1) whelp\n2) warhelp")
    .addField(":hamster:КОМАДНЫ ВЛАДЕЛЬЦА БОТА:hamster:",`1) test\n2) shutdown\n 3) reload`)
    .setFooter("(C) Copyright. Andrew Zex. Все права защищены")

    message.author.send(embed)
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`)
        message.channel.send('Увы, Я Не Могу Вам Отправить Спавку! возможно Ваш ЛС  Закрыт, Воспользуйтесь Альтернативной Командой .хелп')
    }

};
module.exports.help = {
    name: "help"
};