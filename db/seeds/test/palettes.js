
const mockUsers = [
  {
    username: "Greg",
    password: "password",
    projects: [
      {
        name: "Nature",
        palettes: [
          {
            name: "greens",
            color1: "#FF6786",
            color2: "#1DA156",
            color3: "#087839",
            color4: "#00ff6e",
            color5: "#008c3d"
          }
        ]
      }
    ]
  },
  {
    username: "Ashley",
    password: "password",
    projects: [
      {
        name: "Nature",
        palettes: [
          {
            name: "greens",
            color1: "#FF6786",
            color2: "#1DA156",
            color3: "#087839",
            color4: "#00ff6e",
            color5: "#008c3d"
          }
        ]
      }
    ]
  },
  {
    username: "Megan",
    password: "password",
    projects: [
      {
        name: "Nature",
        palettes: [
          {
            name: "greens",
            color1: "#FF6786",
            color2: "#1DA156",
            color3: "#087839",
            color4: "#00ff6e",
            color5: "#008c3d"
          }
        ]
      }
    ]
  }
];

const createUser = (knex, user) => {
  return knex('users').insert({
    username: user.username,
    password: user.password
  }, 'id')
    .then(user_id => {
      let projectPromises = [];
      user.projects.forEach(project => {
        projectPromises.push(createProjects(knex, project, user_id))
      })
      return Promise.all(projectPromises)
    })
    .catch(error => { throw new Error('Errror creating projects', error) })
}

const createProjects = (knex, project, user_id) => {
  return knex('projects').insert({
    name: project.name,
    user_id: user_id[0]
  }, 'id')
    .then(project_id => {
      let palettePromises = [];
      project.palettes.forEach(palette => {
        palettePromises.push(createPalettes(knex, palette, project_id))
      })
      return Promise.all(palettePromises)
    })
    .catch(error => { throw new Error('Error creating palettes', error) })
}

const createPalettes = (knex, palette, project_id) => {
  return knex("palettes").insert({
    name: palette.name,
    color1: palette.color1,
    color2: palette.color2,
    color3: palette.color3,
    color4: palette.color4,
    color5: palette.color5,
    project_id: project_id[0]
  });
}


exports.seed = function (knex) {
  return knex('palettes').del()
    .then(() => knex('projects').del())
    .then(() => knex('users').del())
    .then(() => {
      let userPromises = [];
      mockUsers.forEach(user => {
        userPromises.push(createUser(knex, user))
      })
      return Promise.all(userPromises)
    })
    .catch(err => { throw new Error('Error creating user', err) })
};


