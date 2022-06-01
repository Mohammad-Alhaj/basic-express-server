'use strict'
const server = require('../src/server')
const supertest = require('supertest');
const logger = require('../src/middleware/logger');




let consoleSpy={};
let res ={};
let req={};
let next = jest.fn()


beforeEach(()=>{
    consoleSpy = jest.spyOn(console,'log');
});

describe('logging route',()=>{

    test('test logger middle',()=>{
        logger(req,res,next)
        expect(consoleSpy).toHaveBeenCalled();

    });
    test("it's calling next", () => {
        expect(next).toHaveBeenCalled();
    });

   




});