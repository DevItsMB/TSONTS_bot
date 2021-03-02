const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'server',
	description: 'server!',
	execute(message, args) {
    
        const embed = new MessageEmbed() 
        .setTitle('Server Information')  
        .setColor('#c00109')
        .setThumbnail(message.guild.iconURL(
            { format: 'png', size: 512 }
            )
        )        
        .addFields(
            { name: '❯ Owner', value: `${message.guild.owner}`, inline: true },
            { name: '❯ Server Created', value: `${message.guild.createdAt}`, inline: true },
            { name: '❯ Region', value: `${message.guild.region}`, inline: true },
            { name: '❯ Roles', value: `${message.guild.roles.cache.size}`, inline: true },
            { name: '❯ Verification Level', value: `${message.guild.verificationLevel}`, inline: true },
            { name: '❯ Emoji Count', value: `${message.guild.emojis.cache.size}`, inline: true },

            /// { name: '\u200B', value: '\u200B' },
            /// { name: 'Need support?', value: '<#686994156094357651>', inline: true },
        )
        .setFooter(`Server Name: ${message.guild.name} | ServerID: ${message.guild.id}`);

        message.channel.send(embed);

    },
};