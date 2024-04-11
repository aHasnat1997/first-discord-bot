import dotenv from "dotenv";

dotenv.config();

const config = {
  TOKEN: process.env.TOKEN,
  GUILD_ID: process.env.GUILD_ID,
  CLIENT_ID: process.env.CLIENT_ID
}

export default config;