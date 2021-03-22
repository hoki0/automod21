const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class VolumeMusicCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'volume',
      usage: 'volume <query>',
      aliases: ['ytvolume'],
      description: 'volumees Youtube for a provided query',
	  examples: ['volume Opinions CG5'],
      type: client.types.MUSIC
    });
  }
  async run(message) {
    }
  };
