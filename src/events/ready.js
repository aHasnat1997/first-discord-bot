import { EmbedBuilder } from "discord.js";

export default async function readyEvent(client) {
  console.log(`Logged in as ${client.user.tag}!`);

  // Get the first guild the bot is a member of
  const guild = client.guilds.cache.first();
  if (!guild) return console.error('Bot is not a member of any guild.');

  const rulesChannel = guild.channels.cache.find(channel => channel.name === 'rules-and-guidelines');
  const messages = await rulesChannel.messages.fetch({ limit: 1 });
  if (!rulesChannel) return;
  if (messages.size > 0) return;

  const rulesEmbed = new EmbedBuilder()
    .setTitle('Server Rules and Guidelines')
    .setDescription('Please read and adhere to the following rules and guidelines:')
    .setColor('#7289DA')
    .addFields(
      { name: '1. Be Respectful', value: 'Treat everyone with kindness and respect. Harassment, hate speech, bullying, or discrimination of any kind will not be tolerated.' },
      { name: '2. No Spamming', value: 'Do not spam messages, images, or links in any channel. This includes excessive use of emojis, mentions, or repeated messages.' },
      { name: '3. Stay On Topic', value: 'Keep discussions relevant to the channel\'s topic. Off-topic conversations should be moved to the appropriate channel or taken to direct messages.' },
      { name: '4. No NSFW Content', value: 'Do not post or share any content that is not safe for work (NSFW), including explicit language, images, or discussions of adult topics.' },
      { name: '5. No Advertising', value: 'Do not advertise or promote other Discord servers, websites, products, or services without permission from the server staff.' },
      { name: '6. Respect Privacy', value: 'Do not share personal information about yourself or others. Respect the privacy of fellow server members.' },
      { name: '7. Follow Staff Instructions', value: 'Follow the instructions of the server staff (admins, moderators) at all times. Failure to comply may result in disciplinary action.' },
      { name: '8. Use Proper Channels', value: 'Post messages, images, or media in the appropriate channels. Avoid cluttering channels with unrelated content.' },
      { name: '9. No Spoilers', value: 'Avoid posting spoilers for movies, TV shows, books, or games without proper warning and spoiler tags. Respect others\' enjoyment of media.' },
      { name: '10. No Illegal Content', value: 'Do not post or share any illegal or pirated content, including links to illegal downloads or torrents.' },
      { name: '11. English Only', value: 'Keep chat and discussions primarily in English to ensure everyone can participate and understand.' },
      { name: '12. No Drama', value: 'Avoid starting or participating in drama or arguments. If you have an issue with another member, handle it privately or contact a staff member for assistance.' },
      { name: '13. Use Channels Appropriately', value: 'Use voice and text channels for their intended purposes. For example, use voice channels for voice chat and text channels for text-based discussions.' },
      { name: '14. Reporting', value: 'If you encounter any issues or witness rule violations, report them to the server staff immediately. Do not engage in vigilante justice.' },
      { name: '15. Have Fun', value: 'Most importantly, have fun and enjoy your time in the server! We\'re all here to have a good time and build a positive community.' }
    );
  await rulesChannel.send({ embeds: [rulesEmbed] });
}