const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const pkg = require(__basedir + '/package.json');
const { owner } = require('../../utils/emojis.json');
const { oneLine, stripIndent } = require('common-tags');

module.exports = class BotInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'botinfo',
      aliases: ['bot', 'bi'],
      usage: 'botinfo',
      description: 'Fetches Fluxed Bot\'s bot information.',
      type: client.types.INFO
    });
  }
  run(message) {
    const botOwner = message.client.users.cache.get(message.client.ownerId);
    const prefix = message.client.db.settings.selectPrefix.pluck().get(message.guild.id);
    const tech = stripIndent`
      Version     :: ${pkg.version}
      Library     :: Discord.js v12.3.1
      Environment :: Node.js v12.16.3
      Database    :: SQLite
    `;
    const embed = new MessageEmbed()
      .setTitle('Any Bot\'s Bot Information')
      .setDescription(oneLine`
        Fluxed Bot is a Discord bot that comes from a variation of different open source and fully customizable bots.He comes packaged with a variety of commands and  a multitude of settings that can be tailored to your server's specific needs.His codebase also serves as a base framework to easily create Discord bots of all kinds. She first went live on March 16, 2021. Fluxed has tons of command from Antinuke to Music that you can use anything in any server and More Commands are being added .The Prefix is > but you can customize is to you're servers liking.**.
      `)
      .addField('Prefix', `\`${prefix}\``, true)
      .addField('Client ID', `\`${message.client.user.id}\``, true)
      .addField(`Developer ${owner}`, botOwner, true)
      .addField('Tech', `\`\`\`asciidoc\n${tech}\`\`\``)
      .addField(
        'Links', 
        '**[Invite Me](https://discordapp.com/oauth2/authorize?client_id=733728002910715977&scope=bot&permissions=8) | ' +
        '[Support Server](https://discord.gg/vcTwsbREQBr) **'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
