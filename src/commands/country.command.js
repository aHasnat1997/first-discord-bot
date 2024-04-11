import { ApplicationCommandOptionType } from "discord.js";

const restCountryCommand = {
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
};

export default restCountryCommand;