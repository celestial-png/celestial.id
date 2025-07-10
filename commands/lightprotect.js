module.exports = {
  name: 'lightprotect',
  execute: async (client, message) => {
    const protectMsg = '👑 Light Protect Supreme activated. Anti spam & freeze mode ready.';
    await client.sendMessage(message.from, { text: protectMsg });
  }
};
