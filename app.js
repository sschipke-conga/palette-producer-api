import express from 'express';
import cors from 'cors';
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const app = express();

app.locals.title = 'Palette Producer';
app.use(cors());
app.use(express.json());

// All endpoints live here

export default app;