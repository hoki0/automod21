const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class ConfigCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'config',
      usage: 'config',
      description: 'Shows the antinuke configs ',
      examples: [],
      type: client.types.ANTI
    });
  }
  async run(message) {
    }
  };
