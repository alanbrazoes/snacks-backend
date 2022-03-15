import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
// import cors from 'cors';
// import helmet from 'helmet';

import routes from '@router';

const app = express();
mongoose
  .connect(process.env.URLSERVER as string)
  .then(() => app.emit('ok'))
  .catch((e) => app.emit(e));

// app.use(cors());
// app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.on('ok', () => {
  app.listen(process.env.PORT || process.env.LISTEN);
});
