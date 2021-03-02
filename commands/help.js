const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');


module.exports = {
	name: 'help',
	description: 'help!',
	execute(message, args) {

        const embed = new MessageEmbed()
        .setColor('#c00109')
        .setAuthor('TSONTS Bot', message.guild.iconURL(
                { format: 'png', size: 512 }
                    )
                )        
        .setDescription(`Send a command of your choice with the prefix \`//\` into the channel.`)
        .addFields(
///     { name: 'Regular field title', value: 'Some value here' },
  
        { name: '❯ <:Utility:782631369318727751> Utility', value: '`help`, `server`, `snipe`, `credits`, `price`', inline: true },
        { name: '❯ 🚫 Restricted', value: '`rs`', inline: true },
        
        { name: '❯ Additional:', value: '`//price [args]` \n Make sure to provide the exact name for the item you want to look up!'},

        )
///        .addField('Inline field title', 'Some value here', true)


        .setFooter(`Version: ${config.ver} | Developer: ItsMB#5946`);
        message.channel.send(embed);
    }
};