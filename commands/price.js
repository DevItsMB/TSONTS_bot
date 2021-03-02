const Discord = require('discord.js');
const market = require('steam-market-pricing');

module.exports = {
    name: 'price',
    description: 'price',
    async execute(message, args) {
        // remove `price` from the start
        args.shift();
        const query = args.join(' ');
            // 730 => CS:GO steam game id
        try {
            const item = await market.getItemPrice(730, query);

            //console.log(`[[command:price]] looked up ${query}, result was ${JSON.stringify(item)}`);
            
            const embed = new Discord.MessageEmbed()
            .setTitle(item.market_hash_name)  
            .setColor('#1b2838')
            .setThumbnail('https://file.coffee/u/1M3XaiwonU.png')
            .addFields(
				{ name: '❯ lowest price', value: `${item.lowest_price}`, inline: true },
                { name: '❯ median price', value: `${item.median_price}`, inline: true },
                { name: '❯ volume', value: `${item.volume}*`, inline: true },

                )
			.setTimestamp()
            .setFooter(`the volume of the item is not 100% accurate*`)
			await message.channel.send(embed);
			//await message.channel.send(item.median_price);
            } catch (err) {
            // console.log(`[[command:price]] error from Steam's API: ${err}; input was: ${query}`);
            await message.channel.send("Error: Item Not found! Please provide the correct name.\nYou need to provide the exact name, as on the Steam Community Market. ");
        }
	},
};