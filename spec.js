const { expect } = require('chai');
const foo = 'bar';

describe('foo', ()=> {
  it('equals bar', ()=> {
    expect(foo).to.equal('bar');
  });
});
