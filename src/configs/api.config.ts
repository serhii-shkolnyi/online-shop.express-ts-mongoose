import { config } from "dotenv";

config();

export const apiConfig = {
  PORT: process.env.PORT || 5001,
  DB_URL: process.env.DB_URL || "mongodb://127.0.0.1:27017/online-shop",

  SECRET_SALT_ROUNDS: process.env.SECRET_SALT_ROUNDS || 5,

  SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
  SECRET_REFRESH_KEY: process.env.SECRET_REFRESH_KEY,

  EXPIRES_IN_ACCESS: process.env.EXPIRES_IN_ACCESS,
  EXPIRES_IN_REFRESH: process.env.EXPIRES_IN_REFRESH,

  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL,
  NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD,
};
