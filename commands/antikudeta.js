module.exports = {
  name: 'antikudeta',
  execute: async (client, message) => {
    const antiMsg = '👑 Anti Kudeta Supreme activated. No one can take your throne here.';
    await client.sendMessage(message.from, { text: antiMsg });
  }
};
