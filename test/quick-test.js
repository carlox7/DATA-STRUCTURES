'use strict';

const chai = require('chai'),
  expect = chai.expect;
chai.use(require('chai-sorted'));
const quickSort = require('../quick-sort/quick');

describe('quickSort testing', () =>{
  let testArray = (length, max) => [...new Array(length)].map(() =>
    Math.round(Math.random() * max));
  let testQuick = quickSort(testArray(10, 100));

  describe('quick sort', () => {
    it('should sort array', () => {
      expect(testMerge).to.be.sorted();
      expect(testMerge).to.be.ascending;
      expect(testMerge).to.not.be.descending;
    });

    it('should return an array', () => {
      expect(testMerge).to.be.instanceof(Array);
      expect(testMerge).to.not.be.instanceof(String);
    });
  });
});
