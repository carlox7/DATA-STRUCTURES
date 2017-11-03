'use strict';

const chai = require('chai'),
  expect = chai.expect;
chai.use(require('chai-sorted'));
const insertionSort = require('../insertion-sort/insertion');

describe('insertionSort testing', () =>{
  let testArray = (length, max) => [...new Array(length)].map(() =>
    Math.round(Math.random() * max));
  let testInsertion = insertionSort(testArray(10, 100));

  describe('insertion sort', () => {
    it('should sort array', () => {
      expect(testInsertion).to.be.sorted();
      expect(testInsertion).to.be.ascending;
      expect(testInsertion).to.not.be.descending;
    });

    it('should return an array', () => {
      expect(testInsertion).to.be.instanceof(Array);
      expect(testInsertion).to.not.be.instanceof(String);
    });
  });
});
