'use strict';
const server = require('../src/server');
const supertest = require('supertest');

const request = supertest(server.app);

describe('server',()=>{
test("Handle page",async ()=>{
    const response = await request.get('/person');
expect(response.status).toEqual(200);
expect (typeof response).toEqual('object')
});


test('Handle page error', async () => {
    const response = await request.get('/node');
    expect(response.status).toEqual(404);



});




});