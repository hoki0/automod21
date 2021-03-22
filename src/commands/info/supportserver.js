const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class SupportServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'supportserver',
      aliases: ['support', 'ss'],
      usage: 'supportserver',
      description: 'Displays the invite link to Fluxed Bot\'s Discord Support Server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Support Server')
      .setThumbnail('https://media.tenor.com/images/36d4a3cca93e9afe73bcb8e8bb70a69a/tenor.gif')
      .setDescription('Click [here](https://discord.gg/vcTwsbREQB) to join the Fluxed  Bot Support Server!')
      .addField('Other Links', 
        '**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=712313863256670218&permissions=8&scope=bot)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
