const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class LoopMusicCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'loop',
      usage: 'loop <query>',
      aliases: ['ytloop'],
      description: 'loopes Youtube for a provided query',
	  examples: ['loop Opinions CG5'],
      type: client.types.MUSIC
    });
  }
  async run(message) {
    }
  };
