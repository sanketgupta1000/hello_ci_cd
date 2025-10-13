const app = require('../src/app')
const request = require('supertest');

describe('GET /hello', ()=>
{
    it('should return "Hello World!"', async()=>
    {
        const res = await request(app).get('/hello');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("Hello World!!!!");
    });
});