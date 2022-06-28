const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

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

  context('Promise Add Function', () => {
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

    it('Should Test a promise with return value', () => {
      return demo
        .addPromise(2, 4)
        .then((result) => {
          expect(result).to.equal(6);
        })
        .catch((err) => {
          expect(err).to.not.exist;
        });
    });

    it('Should test promise with async await', async () => {
      const result = await demo.addPromise(4, 5);
      expect(result).to.equal(9);
    });

    it('Should test promise with chai as promised', async () => {
      await expect(demo.addPromise(3, 4)).to.eventually.equal(7);
    });
  });
});
