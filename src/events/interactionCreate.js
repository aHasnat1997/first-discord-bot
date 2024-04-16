import restCountries from "../services/country.service.js";
import joke from "../services/joke.service.js";

export default function interactionCreateEvent(interaction) {
  // console.log(interaction);
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {
    case 'country':
      restCountries(interaction);
      break;
    case 'joke':
      joke(interaction);
      break;

    default:
      break;
  }

}