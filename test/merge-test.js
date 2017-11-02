'use strict';

const chai = require('chai'),
  expect = chai.expect;
chai.use(require('chai-sorted'));
const mergeSort = require('../merge-sort/merge');

describe('mergeSort testing', () =>{
  let testArray = (length, max) => [...new Array(length)].map(() =>
    Math.round(Math.random() * max));
  let testMerge = mergeSort(testArray(10, 100));

  describe('merge sort', () => {
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
