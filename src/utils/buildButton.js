import { ButtonBuilder } from "discord.js";

export const buildButton = ({ id = null, label, style, url = null }) => {
  let btn;

  if (id && !url) {
    btn = new ButtonBuilder()
      .setCustomId(id)
      .setLabel(label)
      .setStyle(style);
  }
  if (!id && url) {
    btn = new ButtonBuilder()
      .setURL(url)
      .setLabel(label)
      .setStyle(style);
  }

  return btn;
};