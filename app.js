import express from 'express';
import cors from 'cors';
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const app = express();

app.locals.title = 'Palette Producer';
app.use(cors());
app.use(express.json());

// *** Endpoints ***

// login an already existing user
app.post("/api/v1/login", (request, response) => {
  const { username, password } = request.body;
  database("users")
    .where({ username, password })
    .then(users => {
      if (users.length) {
        const { id, name, username } = users[0];
        return response.status(200).json({ id, name, username });
      } else {
        return response
          .status(401)
          .json({ error: "Username or password incorrect" });
      }
    })
    .catch(err => response.status(500).json({ error: err }));
});

// create a new user

app.post("/api/v1/signup", (request, response) => {
  const { username, password } = request.body;
  for (let requiredParameter of ["username", "password"]) {
    if (!request.body[requiredParameter]) {
      return response.status(422).send({
        error: `Expected format: {username: <string>, password <string>. You're missing a '${requiredParameter}' property.`
      });
    }
  }
  database("users")
    .insert({ username, password }, "id")
    .then(id => {
      return response.status(201).json({ username, id: id[0] });
    })
    .catch(err => response.status(500).json({ error: err }));
});

// get all the projects for a specific user

app.get("/api/v1/users/:user_id/projects", async (request, response) => {
  const { user_id } = request.params
  try {
  const projects = await database("projects").where({user_id})
  if(projects.length) {
    return response.status(200).json(projects)
  } else {
    return response.status(404).json({error: "No projects yet!"})
  }
  } catch {
    error => response.status(500).json({ error: error })
  }
})

// get a specific project by its id
app.get("/api/v1/projects/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const project = await database("projects").where({ id }).first();
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
app.get("/api/v1/projects/:project_id/palettes/", async (request, response) => {
  const { project_id } = request.params;
  try {
    const palettes = await database("palettes").where({ project_id });
    if (palettes.length) {
      return response.status(200).json(palettes);
    } else {
      return response.status(404).json({ error: "No palettes yet!" });
    }
  } catch {
    error => response.status(500).json({ error: error });
  }
});

// add a new project to the db
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

// add a palette to the db
app.post("/api/v1/palettes", async (request, response) => {
  const palette = request.body;
  for (let requiredParameter of ["project_id", "name", "color1", "color2", "color3", "color4", "color5"]) {
    if (!palette[requiredParameter]) {
      return response.status(422).send({
        error: `Expected format: { project_id: <integer>, name: <string>, color1:<hexcode>, color2:<hexcode>, color3:<hexcode>, color4:<hexcode>, color5:<hexcode>}. You're missing a '${requiredParameter}' property.`
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

// patch a palette
app.patch("/api/v1/palettes/:id", async (request, response) => {
  const { id } = request.params;
  const selectedPalette = await database("palettes")
    .where("id", id)
    .select();
  if (!selectedPalette.length) {
    return response
      .status(404)
      .json({ error: `No existing palette with id of ${id}` });
  }
  const possibleParameters = [
    "name",
    "color1",
    "color2",
    "color3",
    "color4",
    "color5"
  ];
  const targetParam = Object.keys(request.body)[0];
  const hasCorrectParams = possibleParameters.includes(targetParam);
  if (!hasCorrectParams) {
    return response.status(422).json({
      error: `You can only update a palette's <name>, <color1>, <color2>, <color3>, <color4>, <color5>, not ${targetParam}`
    });
  }
  else {
    return database("palettes")
      .where("id", id)
      .update({
        [targetParam]: request.body[targetParam]
      })
      .then(() =>
        response
          .status(202)
          .json({ message: `${targetParam} updated` })
      )
      .catch(error => response.status(500).json({ error }));
  }
});

// patch a project

app.patch("/api/v1/projects/:id", async (request, response) => {
  const { id } = request.params;
  const selectedProject = await database("projects")
    .where("id", id)
    .select();
  if (!selectedProject.length) {
    return response
      .status(404)
      .json({ error: `No existing project with id of ${id}` });
  }
  const possibleParameters = [
    "name"
  ];
  const targetParam = Object.keys(request.body)[0];
  const hasCorrectParams = possibleParameters.includes(targetParam);
  if (!hasCorrectParams) {
    return response.status(422).json({
      error: `You can only update a projects's <name> not ${targetParam}`
    });
  }
  else {
    return database("projects")
      .where("id", id)
      .update({
        [targetParam]: request.body[targetParam]
      })
      .then(() =>
        response
          .status(202)
          .json({ message: `${targetParam} updated` })
      )
      .catch(error => response.status(500).json({ error }));
  }
});

// delete a project 
app.delete("/api/v1/projects/:id", (request, response) => {
  const { id } = request.params;
  database("projects")
    .where({ id })
    .del()
    .then(res => {
      if (res === 0) {
        return response
          .status(404)
          .json(`Project with an id: ${id} does not exist.`);
      }
      response
        .status(200)
        .json(`Project deleted`);
    })
    .catch(err => {
      response.status(500).json(err);
    });
});
// delete a palette using its id
app.delete("/api/v1/palettes/:id", (request, response) => {
  const { id } = request.params;
  database("palettes")
    .where({ id })
    .del()
    .then(res => {
      if (res === 0) {
        return response
          .status(404)
          .json(`Palette with an id: ${id} does not exist.`);
      }
      response.status(200).json(`Palette deleted`);
    })
    .catch(err => {
      response.status(500).json(err);
    });
});

app.get("/api/v1/teapot", (request, response) => {
  return response
    .status(418)
    .json("The server refuses the attempt to brew coffee with a teapot");
})

app.get("/", (request, response) => {
  return response
  .status(200)
  .json("Let's produce some palettes!")
})


export default app;