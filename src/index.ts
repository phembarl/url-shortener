import express from 'express';
import router from './server/routes/index';
import { connectDb } from './server/db';

const app = express();

const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get('/', (req, res) => {
  res.send('<h1>Hello there!</h1>');
});

app.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    error: 'that route does not exist',
  });
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);

  connectDb();
});
