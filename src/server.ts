import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';

// import routes from '@router';
import { error } from '@middlewares/error';
import { Request, Response } from 'express';

const app = express();
mongoose
  .connect(process.env.URLSERVER as string)
  .then(() => app.emit('ok'))
  .catch((err) => console.log(err));

app.use(cors());
app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ response: 'ok' });
});

// app.use(routes);
app.use(error);

app.on('ok', () => {
  app.listen(process.env.PORT || process.env.LISTEN);
});
