const premium = require('../database/premium.json');

module.exports = {
  name: 'checkpremium',
  execute: async (client, message, args) => {
    const target = args[0];
    if (!target) {
      return message.reply('👑 Format: .checkpremium [target]');
    }

    const status = premium.includes(target) ? '✅ Premium Active' : '❌ Premium Inactive';
    await client.sendMessage(message.from, { text: `👑 Status premium ${target}: ${status}` });
  }
};
