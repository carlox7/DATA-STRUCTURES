'use strict';
const chai = require('chai'),
  expect = chai.expect;
chai.use(require('chai-sorted'));
const selectionSort = require('../selection-sort/selection');

let testArray = [{id:2, name:'bob'},{id:1, name:'apple'}, {id:3, name:'carlo'}];

describe('selectionSort testing', () =>{
  let testArray = (length, max) => [...new Array(length)].map(() =>
    Math.round(Math.random() * max));
  let testSelection = selectionSort(testArray(10, 100));

  it('should sort the array', () => {
    expect(testSelection).to.be.sorted();
    expect(testSelection).to.be.ascending;
    expect(testSelection).to.not.be.descending;
  });

  it('should return an array', () => {
    expect(testSelection).to.be.instanceof(Array);
    expect(testSelection).to.not.be.instanceof(String);
  });
});
