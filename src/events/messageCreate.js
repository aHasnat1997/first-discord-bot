export default async function messageCreateEvent(message) {
  // console.log(message);
  if (message.author.bot) return;

  if (
    message.content.toLocaleLowerCase() === 'hi' ||
    message.content.toLocaleLowerCase() === 'hello'
  ) {
    await message.reply(`🖐️ Hello ${message.author.globalName}...`);
  }
}