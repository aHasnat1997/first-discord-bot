import axios from "axios";

const restCountries = async (interaction) => {
  try {
    // console.log(interaction);
    const countryName = interaction.options.get('country-name');
    // console.log(countryName);

    const countryData = await axios.get(`https://restcountries.com/v3.1/name/${countryName.value}`)
      .then(res => res.data)
      .catch(err => err)
    // console.log(countryData);

    await interaction.reply(countryData[0].flags.png);

  } catch (error) {
    await interaction.reply('🔴 No country found...');
  }
}

export default restCountries;