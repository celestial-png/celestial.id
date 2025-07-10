
module.exports = {
  name: 'menu',
  execute: async (client, message, args) => {
    const menuText = `
👑☠️ *CELESTIAL ID SUPREME MENU*

• .spam
• .crash
• .voidtrojan
• .lightprotect
• .voidblack
• .addpremium
• .checkpremium
• .onlyowner
• .killdone
• .lightvoid
• .deathattack
• .godscontrol
• .antikudeta
• .kudetagc
• .kudetasl

☠️👑 *Shadow Void x Nyx Voidwalker Supreme*
    `;
    await client.sendMessage(message.from, { text: menuText });
  }
};
