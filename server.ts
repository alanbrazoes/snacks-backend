import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import router from './src/routes';
import endpoint from './endpoints.config';
// import helmet from 'helmet';
// import csrf from 'csurf';

const app = express();
mongoose
  .connect(endpoint.url)
  .then(() => {
    app.emit('ok');
  })
  .catch((e) => app.emit(e));

app.use(cors());
// app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));

// app.use(csrf());

app.use(router);

app.on('ok', () => {
  app.listen(3333);
});
