const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();
const axios = require('axios');
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.DISCORD_BOT_TOKEN;
const { MessageEmbed } = require("discord.js");
// const PREFIX = '//';
const config = require('./config.json');
const {PREFIX} = require('./config.json');

//const memberCounter = require('./counters/member-counter');
//const welcome = require('./welcome')


// market.getItemPrice(730, 'MP9 | Storm (Minimal Wear)').then(item => console.log(item));




// --------------------------------------------------------------------------------
bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    //memberCounter(bot);
    //welcome(bot)
    bot.user.setPresence({ activity: { name: `Version ${config.ver}` , type: "WATCHING"}, status: 'online' })
});

// --------------------------------------------------------------------------------

bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}
 
bot.on('ready', () => {
    console.log("All commands loaded!");
});
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case "snipe":
            bot.commands.get('snipe').execute(message, args);
        break;
        case "server":
            bot.commands.get('server').execute(message, args);
        break;
        case "rs":
            bot.commands.get('rs').execute(message, args);
        break;
        case "help":
            bot.commands.get('help').execute(message, args);
        break;
        case "price":
            bot.commands.get('price').execute(message, args);
        break;
        case "credits":
            bot.commands.get('credits').execute(message, args);
        break;

        //case "scmm":
            //bot.commands.get('scmm').execute(message, args);
        //break;

    }
});