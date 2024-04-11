import pkg from 'discord.js';
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageActionRow } = pkg;

import axios from "axios";

const restCountries = async (interaction) => {
  try {
    const countryName = interaction.options.get('country-name');

    // const button = new ButtonBuilder()
    //   .setCustomId('button')
    //   .setLabel('Button')
    //   .setStyle(ButtonStyle.Primary);

    // const row = new ActionRowBuilder()
    //   .addComponents(button);

    const countryData = await axios.get(`https://restcountries.com/v3.1/name/${countryName.value}`)
      .then(res => res.data)
      .catch(err => err)
    // console.log(countryData);

    await interaction.reply({
      content: countryData[0].flags.png,
      // components: [buttonsRow]
    });

  } catch (error) {
    await interaction.reply('🔴 No country found...');
  }
}

export default restCountries;