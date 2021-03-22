const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class InviteMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'inviteme',
      aliases: ['invite', 'invme', 'im'],
      usage: 'inviteme',
      description: 'Generates a link you can use to invite Fluxed Bot to your own server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Invite Me')
      .setThumbnail('https://media.tenor.com/images/36d4a3cca93e9afe73bcb8e8bb70a69a/tenor.gif')
      .setDescription(oneLine`
        Click [here](https://discord.com/api/oauth2/authorize?client_id=712313863256670218&permissions=8&scope=bot)
        to invite me to your server!
      `)
      .addField('Other Links', 
        '**[Support Server](https://discord.gg/vcTwsbREQB) **'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
