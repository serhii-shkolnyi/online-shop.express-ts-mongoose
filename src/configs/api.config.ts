import { config } from "dotenv";

config();

export const apiConfig = {
  PORT: process.env.PORT || 5001,
  DB_URL: process.env.DB_URL || "mongodb://127.0.0.1:27017/online-shop",
  SECRET_SALT: process.env.SECRET_SALT || 5,
};
