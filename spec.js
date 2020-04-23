//app
const express = require('express');
const app = express();

//sequelize
const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db');
const User = conn.define('user', {
  name: Sequelize.STRING
});

app.get('/', async(req, res, next)=> res.send(await User.findAll()));
const _app = require('supertest')(app);


const { expect } = require('chai');

describe('sanity check', ()=> {
  const foo = 'bar';
  it('foo equals bar', ()=> {
    expect(foo).to.equal('bar');
  });
});

describe('GET /users', ()=> {
  beforeEach(()=> conn.sync({ force: true}).then(()=> User.create({ name: 'Lucy'})));
  it('returns a list of users', ()=> {
    return _app.get('/') 
      .expect(200)
      .expect( response => {
        expect(response.body.length).to.equal(1);
      });
  });
});
