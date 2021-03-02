const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'snipe',
    description: 'snipe!',
	execute(message, args) {


        const embed = new MessageEmbed() 
        .setTitle(`${message.member.user.tag} Information`) 
        .setColor('#c00109')
        .setThumbnail(message.author.displayAvatarURL(
            { format: 'png', size: 512 }
            )
        )
        .addFields(
            { name: '❯ Username', value: `\`${message.member.user.tag}\``, inline: true },
            { name: '❯ UserID', value: `\`${message.member.id}\``, inline: true },

            //            { name: '❯ Status', value: `\`${message.member.user.presence.status}\``, inline: true },
            { name: '❯ Created', value: `${message.member.user.createdAt}`, inline: false },


            /// { name: '\u200B', value: '\u200B' },
            /// { name: 'Need support?', value: '<#686994156094357651>', inline: true },

        )
        .setFooter(`Version: ${config.ver} | Developer: ItsMB#5946`);
        message.channel.send(embed);

    },
};