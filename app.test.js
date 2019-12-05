import '@babel/polyfill'
import request from 'supertest';
import app from './app'
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

describe('Server', () => {

  beforeEach(async () => {
    await database.seed.run();
  });

  describe('GET /api/v1/user/:user_id', () => {
    it('should return a 200 and a specific user ', async () => {
      // setup
      const expectedUser = await database('user').first();
      const { id } = expectedUser;

      // execution
      const response = await request(app).get(`/api/v1/user/${id}`);
      const user = response.body[0];

      // expectation
      expect(response.status).toBe(200);
      expect(user).toEqual(expectedUser);
    });

    it('should return a 404 and the message "User not found"', async () => {
      const invalidID = -1;

      const response = await request(app).get(`/api/v1/users/${invalidID}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toEqual('User not found');
    });
  });

  describe('GET /api/v1/user/:user_id/projects', () => {
    it('should return a 200 and all projects for a specific user ', async () => {
      // setup
      const expectedUser = await database('user').first();
      const { id } = expectedUser;
      const expectedProjects = await database('projects').where('user_id', id).select();

      // execution
      const response = await request(app).get(`/api/v1/user/${id}/projects`);
      const projects = response.body[0];

      // expectation
      expect(response.status).toBe(200);
      expect(projects).toEqual(expectedProjects);
    });
  });

  describe('GET /api/v1/user/:user_id/projects/:project_id', () => {
    it('should return a 200 and a specific project for a specific user ', async () => {
      // setup
      const expectedUser = await database('user').first();
      const { id } = expectedUser;
      const expectedProject = await database('projects').where('user_id', id).select().first();
      const project_id = expectedProject.id;

      // execution
      const response = await request(app).get(`/api/v1/user/${id}/projects/${project_id}`);
      const project = response.body[0];

      // expectation
      expect(response.status).toBe(200);
      expect(project).toEqual(expectedProject);
    });

    it('should return a 404 and the message "Project not found"', async () => {
      // setup
      const expectedUser = await database('user').first();
      const { id } = expectedUser;
      const invalidID = -1;

      const response = await request(app).get(`/api/v1/users/${id}/projects/${invalidID}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toEqual('Project not found');
    });
  });

  describe('GET /api/v1/user/:user_id/projects/:project_id/palettes', () => {
    it('should return a 200 and all palettes for a specific user\'s project', async () => {
      // setup
      const expectedUser = await database('user').first();
      const { id } = expectedUser;
      const expectedProject = await database('projects').where('user_id', id).select().first();
      const project_id = expectedProject.id;
      const expectedPalettes = await database('palettes').where('project_id', project_id).select();

      // execution
      const response = await request(app).get(`/api/v1/user/${id}/projects/${project_id}/palettes`);
      const palettes = response.body[0];

      // expectation
      expect(response.status).toBe(200);
      expect(palettes).toEqual(expectedPalettes);
    });
  });

  describe('POST /api/v1/users', () => {
    it('should post a new user to the db', async () => {
      // setup
      const newUser = { username: 'Pol', password: 'password', projects: [] };

      // execution
      const response = await request(app).post('/api/v1/user').send(newUser);

      const users = await database('users').where('id', response.body.id).select();
      const user = users[0];


      // expectation
      expect(response.status).toBe(201);
      expect(user.username).toEqual(newUser.username);
    });
  });

  describe('POST /api/v1/users/:user_id/projects', () => {
    it('should post a new project to the db', async () => {
      // setup
      const newProject = { name: 'Neature', palettes: [] };
      const user = await database('user').first();
      const { id } = user;

      // execution
      const response = await request(app).post(`/api/v1/users/${id}/projects`).send(newProject);

      const projects = await database('projects').where('id', response.body.id).select();
      const project = projects[0];


      // expectation
      expect(response.status).toBe(201);
      expect(project.name).toEqual(newProject.name);
    });
  });

  describe('POST /api/v1/users/:user_id/projects/:project_id/palettes/:palette_id', () => {
    it('should post a new palette to the db', async () => {
      // setup
      const newPalette = { name: 'Green', color1: '#asdfgh', color2: '#qwerty', color3: '#ghjklp', color4: '#123456', color5: '#098765' };
      const project = await database('project').first();
      const { id, user_id } = project;

      // execution
      const response = await request(app).post(`/api/v1/user/${user_id}/project/${id}/palettes`).send(newPalette);

      const palettes = await database('palettes').where('id', response.body.id).select();
      const palette = palettes[0];


      // expectation
      expect(response.status).toBe(201);
      expect(palette.name).toEqual(newPalette.name);
    });
  });
});
