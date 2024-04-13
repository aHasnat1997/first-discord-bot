import { EmbedBuilder } from "discord.js";

export default async function guildMemberAddEvent(member) {
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'general');
  const rulesChannel = member.guild.channels.cache.find(channel => channel.name === 'rules-and-guidelines');
  if (!welcomeChannel || !rulesChannel) return;

  // Send a welcome message with a celebration emoji
  const welcomeEmbed = new EmbedBuilder()
    .setTitle(`Welcome to the server, ${member.user.username}! 🎉`)
    .setDescription(`We're glad to have you here ${member.user.globalName}! Enjoy your stay and feel free to ask if you have any questions. \n Please read the rules and guidelines in ${rulesChannel}...`)
    .setColor('#00ff00')
    .setThumbnail('https://i.pinimg.com/originals/5e/78/af/5e78affab2547d678e4c5458dd931381.gif');

  await welcomeChannel.send({ embeds: [welcomeEmbed] });
}