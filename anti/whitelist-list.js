const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class WhitelistListCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'whitelist-list',
      usage: 'whitelist-list',
      description: 'Shows the antinuke whitelist-lists ',
      examples: [],
      type: client.types.ANTI
    });
  }
  async run(message) {
    }
  };
