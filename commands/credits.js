const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");


module.exports = {
	name: 'credits',
	description: 'credits',
	execute(message, args) {

        const embed = new MessageEmbed()
        .setColor('#c00109')
        .setAuthor('TSONTS Bot Credit')
        .setThumbnail()
        .addFields(
        { name: '❯ TSONTS Bot Dev', value: '[ItsMB#5946](https://github.com/DevItsMB)', inline: true },
        { name: '❯ Special Thanks', value: 'Thanks to Prix#0293 & Legend#6873 for giving me the chance to make this Bot for their Discord Server!', inline: true },
        { name: '❯ Third Party', value: 'TSONTS Bot uses these third party services.\n Discord.js - [Discord.js.org](https://discord.js.org)\n steam-market-pricing - [steam-market-pricing](https://www.npmjs.com/package/steam-market-pricing)', inline: false },
        { name: '❯ Important Notes', value: 'This Bot is currently in Beta, I am sorry if you run into some errors. If so please notify me.\n _For example, right now you can not check all CSGO items._', inline: true },

        )
        message.channel.send(embed);
    }
};