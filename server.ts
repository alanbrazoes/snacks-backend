require('dotenv').config();

import express from 'express';
import cors from 'cors';
import path from 'path';

import router from '@router';
import mongoose from 'mongoose';
import endpoint from './endpoints.config';
const app = express();

mongoose
  .connect(endpoint.url)
  .then(() => {
    app.emit('Foi');
  })
  .catch((e) => console.log(e));

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(router);

app.on('Foi', () => {
  app.listen(3333);
});
