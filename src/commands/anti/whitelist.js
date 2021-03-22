const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class WhitelistCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'whitelist',
      usage: 'whitelist',
      description: 'Shows the antinuke whitelists ',
      examples: [],
      type: client.types.ANTI
    });
  }
  async run(message) {
    }
  };
