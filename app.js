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

// login an already existing user
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

// create a new user

app.post("/api/v1/signup", (request, response) => {
  const { username, password } = request.body;
  database("users")
    .insert({ username, password }, "id")
    .then(id => {
      if (id.length) {
        return response.status(201).json({ username, id: id[0] });
      } else {
        return response.status(422).json({ error: "Could not create user" });
      }
    })
    .catch(err => response.status(500).json({ error: err }));
});

// get all the projects for a specific user

app.get("/api/v1/:user_id/projects", async (request, response) => {
  const {user_id} = request.params
  try {
  const projects = await database("projects").where({user_id})
  if(projects.length) {
    return response.status(200).json(projects)
  } else {
    return response.status(404).json({message: "No projects yet!"})
  }
  } catch {
    error => response.status(500).json({error: error})
  }
})

app.get("/api/v1/projects/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const project = await database("projects").where({id}).first();
    if (project) {
      return response.status(200).json(project);
    } else {
      return response.status(404).json({ message: `No project with  and id of ${id} was found!` });
    }
  } catch {
    error => response.status(500).json({ error: error });
  }
});

// get the palettes for a specific project
app.get("/api/v1/:project_id/palettes/", async (request, response) => {
  const { project_id } = request.params;
  try {
    const palettes = await database("palettes").where({ project_id });
    if (palettes.length) {
      return response.status(200).json(palettes);
    } else {
      return response.status(404).json({ message: "No palettes yet!" });
    }
  } catch {
    error => response.status(500).json({ error: error });
  }
});

// ad a new project to the db
app.post("/api/v1/projects", async (request, response) => {
  const project = request.body;
  for (let requiredParameter of ['user_id', 'name']) {
    if (!project[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { user_id: <integer>, name: <string>}. You're missing a '${requiredParameter}' property.` });
    }
  }
  database('projects').insert(project, 'id')
    .then(projectId => {
      response.status(201).json({ id: projectId[0], ...project })
    })
    .catch(error => {
      response.status(500).json({ error });
    });
})

app.post("/api/v1/palettes", async (request, response) => {
  const palette = request.body;
  console.log(palette)
  for (let requiredParameter of ["project_id", "name", "color1", "color2", "color3", "color4", "color5"]) {
    if (!palette[requiredParameter]) {
      return response.status(422).send({
        error: `Expected format: { project_id: <integer>, name: <string>, color1:<hexcode>, color1]2:<hexcode>, color3:<hexcode>, color4:<hexcode>, color5:<hexcode>}. You're missing a '${requiredParameter}' property.`
      });
    }
  }
  database("palettes")
    .insert(palette, "id")
    .then(paletteId => {
      response.status(201).json({ id: paletteId[0], ...palette });
    })
    .catch(error => {
      response.status(500).json({ error: error });
    });
});


export default app;