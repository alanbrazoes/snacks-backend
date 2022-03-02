import express from 'express';
import { config } from 'dotenv';
import {connect} from 'mongoose';
import cors from 'cors';
import path from 'path';

import router from './src/routes';
import endpoint from './endpoints.config';
// import helmet from 'helmet';
// import csrf from 'csurf';
config({path: './env'})
const app = express();

connect(endpoint.url)
  .then(() => {
    app.emit('ok');
  })
  .catch((e: string) => app.emit(e));

app.use(cors());
// app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));

// app.use(csrf());

app.use(router);

app.on('ok', () => {
  app.listen(endpoint.listen);
});
