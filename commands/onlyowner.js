const { owner } = require('../lib/config');

module.exports = {
  name: 'onlyowner',
  execute: async (client, message) => {
    const sender = message.sender.split('@')[0];
    if (!owner.includes(sender)) {
      return message.reply('☠️ Command ini hanya untuk void.');
    }

    await client.sendMessage(message.from, { text: '👑 Only Owner Supreme Command executed.' });
  }
};
