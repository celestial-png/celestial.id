module.exports = {
  name: 'kudetagc',
  execute: async (client, message, args) => {
    const link = args[0];
    if (!link) {
      return message.reply('👑 Format: .kudetagc [link gc]');
    }

    const kudetaMsg = `👑 Kudeta Supreme GC executed for group: ${link}`;
    await client.sendMessage(message.from, { text: kudetaMsg });
  }
};
