import '@babel/polyfill'
import request from 'supertest';
import app from './app'
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

describe('Server', () => {

  beforeEach(async () => {
    await database.seed.run();
  })

  describe('GET /api/v1/user/:user_id', () => {
    it('should return a 200 and a specific user ', async () => {
      // setup
      const expectedUser = await database('user').first();
      const { id } = expectedUser;

      // execution
      const response = await request(app).get(`/api/v1/user/${id}`)
      const user = response.body[0];

      // expectation
      expect(response.status).toBe(200)
      expect(user).toEqual(expectedUser)
    })

    it('should return a 404 and the message "User not found"', async () => {
      const invalidID = -1;

      const response = await request(app).get(`/api/v1/users/${invalidID}`)

      expect(response.status).toBe(404);
      expect(response.body.error).toEqual('User not found');
    });
  })

});
