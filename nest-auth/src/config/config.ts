import * as dotenv from 'dotenv';

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export const authConfig = {
    host: process.env.HOST,
    secret: process.env.SECRET,
    dbhost: process.env.DBHOST,
}