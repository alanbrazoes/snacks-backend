import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import helmet from 'helmet';

import routes from 'src/routes/routes';
import { error } from '@middlewares/error';

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.URLSERVER as string)
  .then(() => app.emit('connected'))
  .catch((err) => {
    throw { status: 500, message: err };
  });

app.use(helmet());

app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(error);

app.on('connected', () => {
  app.listen(process.env.PORT || process.env.LISTEN);
});
