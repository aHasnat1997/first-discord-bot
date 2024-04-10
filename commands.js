import { REST, Routes, ApplicationCommandOptionType } from "discord.js";
import config from "./config.js";

const commands = [
  {
    name: 'country',
    description: 'Replies with country info',
    options: [
      {
        name: 'country-name',
        description: 'Country name',
        type: ApplicationCommandOptionType.String,
        required: true
      }
    ]
  },
];

const rest = new REST({ version: '10' }).setToken(config.TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(config.CLIENT_ID, config.GUILD_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}