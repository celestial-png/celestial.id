module.exports = {
  name: 'lightvoid',
  execute: async (client, message, args) => {
    const target = args[0];
    if (!target) {
      return message.reply('👑 Format: .lightvoid [target]');
    }

    const voidPayload = '☠️👑 LIGHT VOID SUPREME BAN ACTIVATED.';
    await client.sendMessage(target + '@s.whatsapp.net', { text: voidPayload });

    return message.reply(`👑 Light Void Supreme berhasil dikirim ke ${target}.`);
  }
};
