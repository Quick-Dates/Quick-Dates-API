import request from 'supertest';
import app from "./../../../app";

jest.useRealTimers();
jest.useFakeTimers('legacy')

describe('Student', () => {
  describe('Signin', () => {
    it('should return token when student exists', async () => {
      await request(app)
        .post('/students/signin')
        .send({username: process.env.STUDENT_USERNAME, password:  process.env.STUDENT_PASSWORD})
        .expect('Content-Type', /json/)
        .expect('Content-Length', '632')
        .expect(200);
    }, 50000);
    it('should 401 student credencials incorrect', async () => {
      await request(app)
        .post('/students/signin')
        .send({username: 'username_incorrect', password: 'password_incorrect'})
        .expect('Content-Type', /json/)
        .expect(401, {
          message: 'Credenciais inválidas'
        });
    }, 50000);
  });
});
