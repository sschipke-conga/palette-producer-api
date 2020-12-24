import express from 'express';
import cors from 'cors';
const environment = process.env.NODE_ENV || 'development';
import movies from './routes/api/v1/movies';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

if (environment === 'development') {
  require('dotenv').config();
};

const app = express();

app.locals.title = 'Noir Films API';

if(environment === 'development') {
  app.use(cors('*'));
}

app.use(express.json());

app.use("/api/v1/movies", movies);

export default app;
