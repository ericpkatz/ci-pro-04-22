const express = require('express');
const app = express();
app.get('/', (req, res, next)=> res.send('foo'));
const _app = require('supertest')(app);


const { expect } = require('chai');
const foo = 'bar';

describe('foo', ()=> {
  it('equals bar', ()=> {
    expect(foo).to.equal('bar');
  });
});

describe('GET /foo', ()=> {
  it('returns bar', ()=> {
    return _app.get('/') 
      .expect(200);
  });
});
