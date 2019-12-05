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
app.post("/api/v1/login", (request, response) => {
  const { username, password } = request.body;
  console.log(username, password)
  database("users")
    .where({ username, password })
    .then(users => {
      if (users.length) {
        const { id, name, username } = users[0];
        return response.status(200).json({ id, name, username });
      } else {
        return response
          .status(401)
          .json({error:"Username or password incorrect"});
      }
    })
    .catch(err => response.status(500).json({ error: err }));
});

export default app;