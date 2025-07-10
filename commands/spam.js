module.exports = {
  name: 'spam',
  execute: async (client, message, args) => {
    const [target, count, ...textArray] = args;
    const text = textArray.join(' ');
    if (!target || !count || !text) {
      return message.reply('👑 Format: .spam [target] [count] [text]');
    }

    for (let i = 0; i < parseInt(count); i++) {
      await client.sendMessage(target + '@s.whatsapp.net', { text });
    }

    return message.reply(`👑 Spam ${count}x berhasil dikirim ke ${target}.`);
  }
};
