const { Command } = require('discord.js-commando');

module.exports = class nsfw extends Command {
  constructor(client) {
    super(client, {
      name: 'nsfw',
      group: 'other',
      memberName: 'nsfw',
      description: 'Gives nsfw',
      throttling: {
        usages: 2,
        duration: 3
    }
    });
          }

  async run(msg) {
    return msg.channel.send(`Assuming you have a job and your boss walks behind you and looks at your screen, would you be okay with them seeing this kind of content? Thank you for understanding.`, { code: 'txt' })
      .then(msg.delete());
  }
};