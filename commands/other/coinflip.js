const { Command } = require('discord.js-commando');

module.exports = class CoinFlipCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'coinflip',
      aliases: ['fac', 'flipacoin', 'flipcoin'],
      group: 'other',
      memberName: 'coinflip',
      description: 'Flips a coin.',
      throttling: {
        usages: 2,
        duration: 3
      }
    });
  }

  async run(msg) {
    const options = ['heads', 'tails'];
    const m = await msg.say('Flipping.');
    setTimeout(() => { m.edit('Flipping..'); }, 350);
    setTimeout(() => { m.edit('Flipping...'); }, 700);
    setTimeout(() => { m.edit(`**${msg.author.username}**, you got **${ (Math.random() > 0.5 ) ? 'heads' : 'tails'}**!`);}, 1000);
  }
};