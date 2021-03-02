const Discord = require('discord.js');
const market = require('steam-market-pricing');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stats',
    description: 'stats',
    async execute(message, args) {
        // remove `price` from the start
        args.shift();
        const query = args.join(' ');

        try {
            const item = await market.getItemPrice(730, query);
			console.log(`[[command:price]] looked up ${query}, result was ${JSON.stringify(item)}`);
            
            const embed = new MessageEmbed() 
            .setTitle(item.market_hash_name)  
            .setColor('#1b2838')
            .setThumbnail('https://imgur.com/a/GSQmlgc.png')
            .addFields(
            { name: '❯ lowest price', value: `${item.lowest_price}`, inline: true },
                )
            .setTimestamp()
            await message.channel.send(embed);
        
        
        
        
        } catch (err) {
            console.log(`[[command:price]] error from Steam's API: ${err}; input was: ${query}`);
            await message.channel.send("Not found!");
        }	
	},
};