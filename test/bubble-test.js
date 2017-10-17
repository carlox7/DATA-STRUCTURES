const chai = require('chai'),
  expect = chai.expect;
chai.use(require('chai-sorted'));
const bubbleSort = require('../bubble-sort/bubble');
const bubbleSortDoWhile = require('../bubble-sort/bubble');

describe('bubbleSort testing', () =>{
  let testArray = (length, max) => [...new Array(length)].map(() =>
    Math.round(Math.random() * max));
  let testBubble = bubbleSort(testArray(10, 100));

  it('should return an array', () => {
    expect(testBubble).to.be.an.instanceof(Array);
    expect(testBubble).to.have.lengthOf(10);
  });

  it('should sort testArray', () => {
    expect(testBubble).to.be.sorted();
  });
});

describe('bubbleSortDoWhile testing', () => {
  let arrayTest = [76, 89, 45, 76, 4, 1, 90];
  let testSortDW = bubbleSortDoWhile(arrayTest);

  it('should sort arrayTest', () => {
    expect(testSortDW).to.be.sorted();
  });
});
