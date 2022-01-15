import express from 'express';
import router from '@router';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(router);

app.listen(3333);
