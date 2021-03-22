const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class MoveMusicCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'move',
      usage: 'move <query>',
      aliases: ['ytmove'],
      description: 'movees Youtube for a provided query',
	  examples: ['move Opinions CG5'],
      type: client.types.MUSIC
    });
  }
  async run(message) {
    }
  };
