const request = require('supertest');
const app = require('../BackendScaffolder/server'); // Adjust if using separate export

describe('Auth API', () => {
  it('should return 404 for unknown user', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'ghost@zortal.com',
      password: 'fakepass'
    });
    expect(res.statusCode).toBe(404);
  });
});

describe('ZorCoin API', () => {
  it('should fail to spend ZorCoin with missing user', async () => {
    const res = await request(app).post('/api/zorcoin/spend').send({
      userId: '000000000000000000000000',
      amount: 10,
      item: 'Style Boost'
    });
    expect(res.statusCode).toBe(404);
  });
});
