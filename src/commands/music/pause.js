const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class PauseMusicCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pause',
      usage: 'pause <query>',
      aliases: ['ytpause'],
      description: 'pausees Youtube for a provided query',
	  examples: ['pause Opinions CG5'],
      type: client.types.MUSIC
    });
  }
  async run(message) {
    }
  };
