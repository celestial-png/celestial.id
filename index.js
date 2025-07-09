const { default: makeWASocket, useMultiFileAuthState } = require('@adiwajshing/baileys');
const pino = require('pino');
const fs = require('fs');
const config = require('./lib/config');

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('session');
  const client = makeWASocket({
    logger: pino({ level: 'silent' }),
    auth: state
  });

  client.ev.on('creds.update', saveCreds);

  client.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;

    const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
    const prefix = config.prefix;
    if (!text.startsWith(prefix)) return;

    const args = text.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    try {
      const cmd = require(`./commands/${command}.js`);
      cmd.execute(client, msg, args);
    } catch (err) {
      console.log(`[ERROR COMMAND]: ${command}`, err);
    }
  });
}

startBot();
