import { REST, Routes } from "discord.js";
import config from "../config/index.js";
import restCountryCommand from "./country.command.js";
import jokeCommand from "./joke.command.js";

const commands = [];

commands.push(restCountryCommand);
commands.push(jokeCommand);

(async function registerCommand() {
  try {
    const rest = new REST({ version: '10' }).setToken(config.TOKEN);

    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(config.CLIENT_ID, config.GUILD_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();