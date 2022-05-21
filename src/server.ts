import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';

import routes from '@router';
import { error } from '@middlewares/error';

const app = express();
mongoose
  .connect(process.env.URLSERVER as string)
  .then(() => app.emit('ok'))
  .catch((err) => console.log(err));

app.use(cors());
app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(error);

app.on('ok', () => {
  console.log('aqui');
  app.listen(process.env.PORT || process.env.LISTEN);
});
