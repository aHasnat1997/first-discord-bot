import { ActionRowBuilder, ButtonStyle, ComponentType } from 'discord.js';
import axios from "axios";
import { buildButton } from '../utils/buildButton.js';

const restCountries = async (interaction) => {
  try {
    const countryName = interaction.options.get('country-name');
    const countryData = await axios.get(`https://restcountries.com/v3.1/name/${countryName.value}`)
      .then(res => res.data)
      .catch(err => err)
    console.log(countryData);

    const buttonsConfig = [
      {
        id: 'capital',
        label: 'Capital',
        style: ButtonStyle.Primary
      },
      {
        id: 'area',
        label: 'Area',
        style: ButtonStyle.Primary
      },
      {
        id: 'population',
        label: 'Population',
        style: ButtonStyle.Primary
      },
      {
        id: 'flag',
        label: 'Flag',
        style: ButtonStyle.Primary
      },
      {
        url: countryData[0]?.maps?.googleMaps,
        label: 'Google Maps',
        style: ButtonStyle.Link
      }
    ];

    const row = new ActionRowBuilder();
    buttonsConfig.forEach(config => {
      const button = buildButton(config);
      row.addComponents(button);
    });

    const reply = await interaction.reply({
      content: `${countryData[0]?.name?.official} ${countryData[0]?.flag}`,
      components: [row]
    });
    // console.log(reply);

    const collector = reply.createMessageComponentCollector({
      ComponentType: ComponentType.Button
    });

    collector.on('collect', (int) => {
      if (int.customId === 'capital') {
        int.reply(`Capital of ${countryData[0]?.name?.common} is ${countryData[0]?.capital[0]}.`);
      }
      if (int.customId === 'area') {
        int.reply(`Area of ${countryData[0]?.name?.common} is approximate ${countryData[0]?.area} km².`);
      }
      if (int.customId === 'population') {
        int.reply(`Total population of ${countryData[0]?.name?.common} is approximate ${countryData[0]?.area}`);
      }
      if (int.customId === 'flag') {
        int.reply(countryData[0]?.flags.png);
      }
    })

  } catch (error) {
    console.log(error);
    await interaction.reply('🔴 No country found...');
  }
}

export default restCountries;