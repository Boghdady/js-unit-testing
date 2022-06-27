const chai = require('chai');
const expect = chai.expect;

const demo = require('./demo');

describe('Demo file', () => {
  context('Add Function', () => {
    it('should add two numbers', () => {
      expect(demo.add(4, 5)).to.equal(9);
    });
  });

  context('Callback Add Function', () => {
    it('It should test add callback function', (done) => {
      demo.addCallback(4, 5, (err, result) => {
        expect(err).to.not.exist;
        expect(result).to.equal(9);
        done();
      });
    });
  });

  context('Promise Add Function', (done) => {
    it('should resolve the sum of two numbers', () => {
      demo
        .addPromise(2, 4)
        .then((result) => {
          expect(result).to.equal(6);
        })
        .catch((err) => {
          expect(err).to.not.exist;
        });
    });
  });
});
