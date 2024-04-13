import restCountries from "../services/country.service.js";
import joke from "../services/joke.service.js";

export default async function interactionCreateEvent(interaction) {
  // console.log(interaction);
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'country') restCountries(interaction);

  if (interaction.commandName === 'joke') joke(interaction);
}