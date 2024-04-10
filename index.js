import { Client, GatewayIntentBits, IntentsBitField } from 'discord.js';
import axios from "axios";
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
  try {
    // console.log(interaction);
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'country') {
      const countryName = interaction.options.get('country-name');
      // console.log(countryName);

      const countryData = await axios.get(`https://restcountries.com/v3.1/name/${countryName.value}`)
        .then(res => res.data)
        .catch(err => err)
      // console.log(countryData);

      await interaction.reply(countryData[0].flags.png);
    }
  } catch (error) {
    await interaction.reply('No country found...🔴');
  }
});


client.login(config.TOKEN);
