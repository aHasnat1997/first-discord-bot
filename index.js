import { Client, GatewayIntentBits, IntentsBitField } from 'discord.js';
import config from './src/config/index.js';
import restCountries from './src/services/country.service.js';
import joke from './src/services/joke.service.js';

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
    message.content.toLocaleLowerCase() === 'hi' ||
    message.content.toLocaleLowerCase() === 'hello'
  ) {
    await message.reply(`🖐️ Hello ${message.author.globalName}...`);
  }
});

client.on('interactionCreate', async (interaction) => {
  // console.log(interaction);
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'country') restCountries(interaction);

  if (interaction.commandName === 'joke') joke(interaction);
});


client.login(config.TOKEN);
