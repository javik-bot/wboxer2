
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
bot.mutes = require('./mutes.json');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
let profile = require('./profile.json');
const mysql = require('mysql');
fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name,props);
    });
});
fs.readdir('./music/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./music/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.config.name,props);
    });
});
fs.readdir('./whcmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./whcmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name,props);
    });
});
fs.readdir('./fun/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./fun/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name,props);
    });
});
fs.readdir('./prem/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./prem/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name,props);
    });
});

bot.on('ready', () => {
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link)
var i = 0;
var timer = bot.setInterval(function () {
    var gamePresence = ["RELEASE 1.18.1! подробнее .changelog", ".help для справки в лс",".хелп для справки в чат", "Создатель хочет кушоц, любви и ласки"] ;//каждое слово через запятую - отдельный статус
    bot.user.setPresence({ game: { name: gamePresence[i%gamePresence.length], type: 'Streaming', url: "https://www.twitch.tv/amei_official" } });
    i++;
},2500)
    });
    bot.setInterval(()=>{
        for(let i in bot.mutes){
            let time = bot.mutes[i].time;
            let guildid = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildid);
            let member = guild.members.get(i);
            let muteRole = member.guild.roles.find(r => r.name === "Muted");
            if(!muteRole) continue;

            if(Date.now()>= time){
                member.removeRole(muteRole);
                delete bot.mutes[i];
                fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
                    if(err) console.log(err);
                });
            }
        }

    },5000)

});

bot.on('message', message => {
    if(message.content === '.h ruroulette') {
    let embed = new Discord.RichEmbed()
    .setTitle('Справка Русская Рулетка')
    .setColor("#0ef5f0")
    .setDescription('Очень хардкорная игра!')
    .addField('Название','Русская Рулетка')
    .addField('Шансы выйграть','7 из 8')
    .addField('Кулдаун команды','в разработке')
    .addField('Создатель для бота','Andrew Zex(Hamster)')
    .addField('Время',message.createdAt.toLocaleString())
    .setFooter(`(C) Copyright. Andrew Zex. Все права защищены`)
    message.reply(message.channel.send(embed))
    }
})

bot.on('message', message => {
    if(message.content === '.rps rock'){
    let choises = ['Вы выбрали **Rock**. Я выбрал **Rock**. у нас ничья!', 'Вы выбрали **Rock**. я выбрал **Paper**. Вы проиграли!', 'Вы выбрали **Rock**. Я выбрал **Scissors**. Вы выйграли!']
        let response = choises[Math.floor(Math.random() * choises.length)]
    let embed = new Discord.RichEmbed()
    .setTitle('Игра RPS')
    .addField('Результат',`${response}`)
    message.reply(embed)
    }
})

bot.on('message', message => {
    if(message.content === '.rps paper'){
    let choises = ['Вы выбрали **paper**. Я выбрал **paper**. у нас ничья!', 'Вы выбрали **paper**. я выбрал **rock**. Вы выйграли!', 'Вы выбрали **paper**. Я выбрал **Scissors**. Вы проиграли!']
        let response = choises[Math.floor(Math.random() * choises.length)]
    let embed = new Discord.RichEmbed()
    .setTitle('Игра RPS')
    .addField('Результат',`${response}`)
    message.reply(embed)
    }
})

bot.on('message', message => {
    if(message.content === '.rps scissors'){
    let choises = ['Вы выбрали **scissors**. Я выбрал **paper**. Вы выйграли!', 'Вы выбрали **scissors**. я выбрал **rock**. Вы проиграли!', 'Вы выбрали **scissors**. Я выбрал **Scissors**. У нас ничья!']
        let response = choises[Math.floor(Math.random() * choises.length)]
    let embed = new Discord.RichEmbed()
    .setTitle('Игра RPS')
    .addField('Результат',`${response}`)
    message.reply(embed)
    }
})

bot.on('message', message => {
    if(message.content === '.h nitro') {
    let embed = new Discord.RichEmbed()
    .setTitle('Справка Nitro Gift Joke')
    .setColor("#0ef5f0")
    .setDescription('Кто хочет попытать счастье?')
    .addField('Название','Nitro Gift Joke')
    .addField('Внимние!','Это всего лишь генератор шуточного нитро!\n у него нет цели выдать рабочее нитро!')
    .addField('Использование','.nitro')
    .addField('Создатель для бота','Andrew Zex(Hamster)')
    .addField('Время',message.createdAt.toLocaleString())
    .setFooter(`(C) Copyright. Andrew Zex. Все права защищены`)
    message.reply(message.channel.send(embed))
    }
})

bot.on('message', message => {
    if(message.content === '.h mcode') {
    let embed = new Discord.RichEmbed()
    .setTitle('Справка Minecraft Gift Joke')
    .setColor("#0ef5f0")
    .setDescription('Кто хочет попытать счастье?')
    .addField('Название','Minecraft Gift Joke')
    .addField('Внимние!','Это всего лишь генератор шуточного гифт кода!\n у него нет цели выдать рабочий гифт код!')
    .addField('Использование','.mcode')
    .addField('Создатель для бота','Andrew Zex(Hamster)')
    .addField('Время',message.createdAt.toLocaleString())
    .setFooter(`(C) Copyright. Andrew Zex. Все права защищены`)
    message.reply(message.channel.send(embed))
    }
})

bot.on('message', message => {
    if(message.content === '.h steamkey') {
    let embed = new Discord.RichEmbed()
    .setTitle('Справка Steam Key Joke')
    .setColor("#0ef5f0")
    .setDescription('Кто хочет попытать счастье в Steam?')
    .addField('Название','Steam Key Joke')
    .addField('Внимние!','Это всего лишь генератор шуточных кодов Steam!\n у него нет цели выдать рабочий ключ Steam!')
    .addField('Использование','.steamkey')
    .addField('Создатель для бота','Andrew Zex(Hamster)')
    .addField('Время',message.createdAt.toLocaleString())
    .setFooter(`(C) Copyright. Andrew Zex. Все права защищены`)
    message.reply(message.channel.send(embed))
    }
})

bot.on('message', message => {
    if(message.content === '.h coinflip') {
    let embed = new Discord.RichEmbed()
    .setTitle('Справка Орёл и решка')
    .setColor("#0ef5f0")
    .setDescription('Есть монетка?!')
    .addField('Название','Орёл и решка')
    .addField('Шансы выйграть','1 из 3\nесть шанс потерять монету из вида')
    .addField('Кулдаун команды','в разработке')
    .addField('Создатель для бота','Andrew Zex(Hamster)')
    .addField('Время',message.createdAt.toLocaleString())
    .setFooter(`(C) Copyright. Andrew Zex. Все права защищены`)
    message.reply(message.channel.send(embed))
    }
})

bot.on('message', message => {
    if(message.content === '.h recovery') {
    let embed = new Discord.RichEmbed()
    .setTitle('Справка Recovery Joke')
    .setColor("#0ef5f0")
    .setDescription('Хочешь восстановить несуществующий файл?')
    .addField('Название','Recovery Joke')
    .addField('Работает по типу','Команда say')
    .addField('Как использовать','.recovery <имя файла,которое хотите "восстановить">')
    .addField('Права','member')
    .addField('Создатель для бота','Andrew Zex(Hamster)')
    .addField('Время',message.createdAt.toLocaleString())
    .setFooter(`(C) Copyright. Andrew Zex. Все права защищены`)
    message.reply(message.channel.send(embed))
    }
})

bot.on('guildMemberAdd',(member)=>{
    let role = member.guild.roles.find(r => r.name === "[I]Незнакомчик");
    member.addRole(role);
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!profile[uid]){
        profile[uid] ={
            coins:10,
            warns:0,
            xp:0,
            lvl:1,
            skills:1,
        };
    };
    let u = profile[uid];

    u.coins++;
    u.xp++;

    if(u.xp>= (u.lvl * 5)){
        u.xp = 0;
        u.lvl += 1;
    };


    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);
    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id;
});
bot.login(token);