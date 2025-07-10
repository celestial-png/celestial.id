module.exports = {
  name: 'godscontrol',
  execute: async (client, message, args) => {
    const target = args[0];
    if (!target) {
      return message.reply('👑 Format: .godscontrol [target]');
    }

    const godsPayload = '☠️👑 GOD’S SYSTEM LIGHT SUPREME ACTIVATED. SYSTEM CONTROL INITIATED.';
    await client.sendMessage(target + '@s.whatsapp.net', { text: godsPayload });

    return message.reply(`👑 God’s Control Supreme berhasil dikirim ke ${target}.`);
  }
};
