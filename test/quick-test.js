'use strict';

const chai = require('chai'),
  expect = chai.expect;
chai.use(require('chai-sorted'));
const quickSort = require('../quick-sort/quick');

describe('quickSort testing', () =>{
  let testArray = (length, max) => [...new Array(length)].map(() =>
    Math.round(Math.random() * max));
  let testQuick = quickSort(testArray(10, 100), 0, 9);

  describe('quick sort', () => {
    it('should sort array', () => {
      expect(testQuick).to.be.sorted();
      expect(testQuick).to.be.ascending;
      expect(testQuick).to.not.be.descending;
    });

    it('should return an array', () => {
      expect(testQuick).to.be.instanceof(Array);
      expect(testQuick).to.not.be.instanceof(String);
    });
  });
});
