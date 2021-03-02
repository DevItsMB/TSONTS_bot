const TOKEN = process.env.DISCORD_BOT_TOKEN;
const Discord = require('discord.js');
const bot = new Discord.Client();
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'rs',
	description: 'rs!',
	execute(message, args) {

              var currentdate = new Date(); 
              var datetime = "" + currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/" 
              + currentdate.getFullYear() + " @ "  
              + currentdate.getHours() + ":"  
              + currentdate.getMinutes() + ":" 
              + currentdate.getSeconds();
    
              if (message.member.hasPermission("ADMINISTRATOR")) {
                
    
              
              
                const embed = new MessageEmbed()
              .setThumbnail('https://cdn.discordapp.com/emojis/707213070375714878.png?v=1')
              .setColor('#c00109')
              .setAuthor('TSONTS Bot', message.guild.iconURL(
              { format: 'png', size: 512 }
                  )
              )        
              .setDescription(`${message.author} | \`${message.author.id}\` has restarted the services.\n Time: \`${datetime}\``)
              .setFooter(`Version: ${config.ver} | Developer: ItsMB#5946`);
              message.channel.send(embed);
              var currentdate = new Date(); 
              var datetime = "Logged in: " + currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/" 
              + currentdate.getFullYear() + " @ "  
              + currentdate.getHours() + ":"  
              + currentdate.getMinutes() + ":" 
              + currentdate.getSeconds();
              bot.destroy();
                bot.login(TOKEN)
                bot.on('ready', () => {
                    console.info(`Logged in as ${bot.user.tag}!`);
                    
                    // bot.user.setPresence({ activity: { name: 'Developer Café' , type: "WATCHING"}, status: 'online' })
                
                });

                  console.log(datetime)
                  bot.on('ready', () => {
                    console.log("All commands loaded!");
                });
              
              } else {
                message.channel.send(`\`Error 104: Insufficient Permissions\``)
              }
            ;
    	},
};