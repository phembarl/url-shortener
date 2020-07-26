import mongoose from 'mongoose';
import Url from './urls';

const { DATABASE_URL } = process.env;
const DB_URI = DATABASE_URL || '';

const connectDb = () => {
  return mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

const db = mongoose.connection;
db.on('error', () => {
  console.log('> error occurred from the database');
});
db.on('open', () => {
  console.log('> successfully opened the database');
});

const models = { Url };
export { connectDb };
export default models;
