const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class StopMusicCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'stop',
      usage: 'stop <query>',
      aliases: ['ytstop'],
      description: 'stopes Youtube for a provided query',
	  examples: ['stop Opinions CG5'],
      type: client.types.MUSIC
    });
  }
  async run(message) {
    }
  };
