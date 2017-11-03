'use strict';

module.exports = function quickSort(arr, left, right){
  let pivot, partitionIndex;
  if(typeof left === 'undefined') left = 0;
  if(typeof right === 'undefined') right = arr.length - 1;

  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};

function partition(arr, pivot, left, right){
  let pivotValue = arr[pivot],
    partitionIndex = left;

  for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
