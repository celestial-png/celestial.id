module.exports = {
  name: 'kudetasl',
  execute: async (client, message, args) => {
    const link = args[0];
    if (!link) {
      return message.reply('👑 Format: .kudetasl [link saluran]');
    }

    const kudetaMsg = `👑 Kudeta Supreme Saluran executed for channel: ${link}`;
    await client.sendMessage(message.from, { text: kudetaMsg });
  }
};
