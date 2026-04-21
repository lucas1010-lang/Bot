require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`Logado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Pong 🏓');
  }
});

client.login(process.env.MTQ5MjAxOTM1NzQ5NTMzMjg4NQ.GhRu_r.Bx6bDoiL-tDdEOoLiyp2MM54M4XjVaAjDLjc1U);
