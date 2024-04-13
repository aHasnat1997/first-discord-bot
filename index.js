import { Client, GatewayIntentBits } from 'discord.js';
import config from './src/config/index.js';
import readyEvent from './src/events/ready.js';
import messageCreateEvent from './src/events/messageCreate.js';
import guildMemberAddEvent from './src/events/guildMemberAdd.js';
import interactionCreateEvent from './src/events/interactionCreate.js';

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

client.once('ready', () => readyEvent(client))

client.on('messageCreate', messageCreateEvent);

client.on('guildMemberAdd', guildMemberAddEvent);

client.on('interactionCreate', interactionCreateEvent);


client.login(config.TOKEN);
