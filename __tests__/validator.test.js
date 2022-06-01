'use strict';
const server = require('../src/server')
const supertest = require('supertest');
const validator = require('../src/middleware/validator')
const request = supertest(server.app);




describe('validator',()=>{
    test("name with null ",async ()=>{
      const response =  await request.get('/person?name=')
    expect(response.status).toEqual(500);
    
    });

    test("it's not quere string ",async ()=>{
        const response =  await request.get('/person?name=1234')
      expect(response.text).toEqual("the name it is not string");
      

      });

      test("name with quere string",async ()=>{
        const response =  await request.get('/person?name=mohamamd')
      expect(response.status).toEqual(200);
      expect(response.body).toEqual( {"name": "mohamamd"});
      });


});