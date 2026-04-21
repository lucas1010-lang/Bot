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
require('dotenv').config();
const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Responde com Pong!')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registrando comandos...');

    await rest.put(
      Routes.applicationCommands('1471703783909359840'),
      { body: commands }
    );

    console.log('Comandos registrados!');
  } catch (error) {
    console.error(error);
  }
})();
