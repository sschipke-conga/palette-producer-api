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
});
