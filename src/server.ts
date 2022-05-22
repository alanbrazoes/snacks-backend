import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
// import mongoose from 'mongoose';
// import helmet from 'helmet';

// import routes from '@router';
// import { error } from '@middlewares/error';

const app = express();
app.use(express.json());
app.use(cors());

// mongoose
//   .connect(process.env.URLSERVER as string)
//   .then(() => app.emit('ok'))
//   .catch((err) => console.log(err));

// app.use(helmet());

app.use(express.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ response: 'ok' });
});

// app.use(routes);
// app.use(error);

app.on('ok', () => {
  app.listen(process.env.PORT || process.env.LISTEN);
});
