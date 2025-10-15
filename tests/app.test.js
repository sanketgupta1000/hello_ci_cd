const app = require('../src/app')
const request = require('supertest');

describe('GET /hello', ()=>
{
    it('should return "Hello World!"', async()=>
    {
        const res = await request(app).get('/hello');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("Hello World!");
    });
});

describe('GET /hello/:name', ()=>
{
    it('should return "Hello <name>!"', async()=>
    {
        const name = "Alice";
        const res = await request(app).get(`/hello/${name}`);
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual(`Hello ${name}!`);

        // test with another name
        const anotherName = "Bob";
        const res2 = await request(app).get(`/hello/${anotherName}`);
        expect(res2.statusCode).toEqual(200);
        expect(res2.text).toEqual(`Hello ${anotherName}!`);

    });
});