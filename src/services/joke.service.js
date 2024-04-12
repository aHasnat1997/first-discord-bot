import axios from "axios";

const joke = async (interaction) => {
  try {
    const jokeCategory = interaction.options.get('joke-category');
    // console.log(jokeCategory);

    const jokeData = await axios.get(`https://v2.jokeapi.dev/joke/${jokeCategory.value}?type=twopart&safe-mode=true`)
      .then(res => res.data)
      .catch(err => err)
    // console.log(jokeData);

    await interaction.reply(`${jokeData.setup} \n || ${jokeData.delivery} ||`);
  } catch (error) {
    console.log(error);
    await interaction.reply('🔴 No joke found...');
  }
}

export default joke;