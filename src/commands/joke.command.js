import { ApplicationCommandOptionType } from "discord.js";

const categories = ["Any", "Misc", "Programming", "Dark", "Pun", "Spooky", "Christmas"]

const jokeCommand = {
  name: 'joke',
  description: 'Replies with a jock',
  options: [
    {
      name: 'joke-category',
      description: 'Category of the joke',
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: categories.map(category => ({
        name: category,
        value: category
      }))
    }
  ]
};

export default jokeCommand;