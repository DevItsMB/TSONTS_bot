const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot = new Discord.Client();

    module.exports = {
	name: 'bot',
	description: 'bot!',
	execute(message, args) {
    
                
        const embed = new MessageEmbed()
        .setColor('#3e70dd')
        .setAuthor('Café Utilities Info Page', message.guild.iconURL(
            { format: 'png', size: 512 }
                )
        )        
        .addFields(
///     { name: 'Regular field title', value: 'Some value here' },
  
        { name: '❯ Version', value: '`0.9a`', inline: false },  
        { name: '❯ Library', value: 'discord.js', inline: false },
        { name: '❯ Developer', value: '[ItsMB](https://github.com/DevItsMB)', inline: false },

        { name: '\u200B', value: '\u200B' },

        { name: '❯ Shards', value: '`0` of `1`', inline: true },
        { name: '❯ API', value: `${Math.round(bot.ping)}ms`, inline: true },
        { name: '❯ Memory', value: `${process.memoryUsage().heapUsed} MB`, inline: true },

        )


///     .addField('Inline field title', 'Some value here', true)
        .setFooter('Café Utilities © 2020');
        message.channel.send(embed);
    }
};