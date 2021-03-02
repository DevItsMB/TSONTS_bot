const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: 'scmm',
  description: 'scmm!',
  execute(message, args) {
    axios.get('https://scmm.app/api/market/stat/hotRightNow')
      .then((res) => {
        // console.log(res.data.items)
        const embed = new Discord.MessageEmbed()
          .setTitle('scmm.app - Hot Right Now')
          .setURL('https://scmm.app/steam/marketstatistics')
          .setColor('#1b2838')
          //.setThumbnail(res.data.items[i].iconUrl)
          .setTimestamp()
          .setFooter('data provided by scmm.app')

        for (let i = 0; i < res.data.items.length; i++) {
          embed.addField('name', `${res.data.items[i].name}`);
          embed.addField('steamAppId', `${res.data.items[i].steamAppId}`);
          embed.addField('last24hrSales', `${res.data.items[i].last24hrSales}`);

          //console.log(res.data.items[i])
        }

        message.channel.send(embed);
      })
      .catch((err) => {
        console.error('ERR:', err)
      })
  },
};