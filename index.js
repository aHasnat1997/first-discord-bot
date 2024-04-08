import { Client, GatewayIntentBits, IntentsBitField } from 'discord.js';
import config from './config.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
    // IntentsBitField.Flags.Guilds,
    // IntentsBitField.Flags.GuildMembers,
    // IntentsBitField.Flags.GuildMessages,
    // IntentsBitField.Flags.MessageContent
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  // console.log(message);
  if (message.author.bot) return;

  if (
    message.content === 'hi' ||
    message.content === 'Hi' ||
    message.content === 'Hello' ||
    message.content === 'hello'
  ) {
    await message.reply(`🖐️ Hello ${message.author.globalName}...`);
  }
});

client.on('interactionCreate', async (interaction) => {
  // console.log(interaction);
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

});


client.login(config.TOKEN);
