const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'multi',
    description: 'multi!',
	execute(message, args) {


        const embed = new MessageEmbed() 
        .setTitle('Steam Multisell Links') 
        .setThumbnail('https://file.coffee/u/1M3XaiwonU.png')
        .setColor('#1b2838')
        .addFields(
            { name: '❯ Popular Cases', value: '[Broken Fang Case](https://steamcommunity.com/market/multisell?appid=730&contextid=2&items[]=Operation%20Broken%20Fang%20Case&qty[]=0)\n[Gamma 2 Case](https://steamcommunity.com/market/multisell?appid=730&contextid=2&items[]=Gamma%202%20Case&qty[]=0)\n[Spectrum 2 Case](https://steamcommunity.com/market/multisell?appid=730&contextid=2&items[]=Spectrum%202%20Case&qty[]=0)', inline: true },
            { name: '❯ Other Cases', value: '[CS20 Case](https://steamcommunity.com/market/multisell?appid=730&contextid=2&items[]=CS20%20Case&qty[]=0)\n[Chroma 3 Case](https://steamcommunity.com/market/multisell?appid=730&contextid=2&items[]=Chroma%203%20Case&qty[]=0)\n[Horizon Case](https://steamcommunity.com/market/multisell?appid=730&contextid=2&items[]=Horizon%20Case&qty[]=0)\n[Revolver Case](https://steamcommunity.com/market/multisell?appid=730&contextid=2&items[]=Revolver%20Case&qty[]=0)', inline: true },
            { name: '❯ Special', value: '[All Cases](https://tinyurl.com/MultiAllCases)\n[Dota Items](https://tinyurl.com/MultiAllDota)', inline: false},


            /// { name: '\u200B', value: '\u200B' },
            /// { name: 'Need support?', value: '<#686994156094357651>', inline: true },

        )
        .setFooter(`Version: ${config.ver} | Developer: ItsMB#5946`);
        message.channel.send(embed);

    },
};