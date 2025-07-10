const fs = require('fs');
const premium = require('../database/premium.json');

module.exports = {
  name: 'addpremium',
  execute: async (client, message, args) => {
    const target = args[0];
    if (!target) {
      return message.reply('👑 Format: .addpremium [target]');
    }

    if (!premium.includes(target)) {
      premium.push(target);
      fs.writeFileSync('./database/premium.json', JSON.stringify(premium, null, 2));
    }

    await client.sendMessage(message.from, { text: `👑 Premium berhasil ditambahkan untuk ${target}.` });
  }
};
