const chai = require('chai');
const expect = chai.expect;

const demo = require('./demo');

describe('Demo file', () => {
  context('Add Function', () => {
    it('should add two numbers', () => {
      expect(demo.add(4, 5)).to.equal(9);
    });
  });
});
