import * as dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  throw new Error('MONGO_URL environment variable is not defined');
}

export default {
  mongoUrl,
};
