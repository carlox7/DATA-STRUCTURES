'use strict';

module.exports = function insertionSort(arr){
  let j, i;
  for(i = 1; i < arr.length; i++){
    let temp = arr[i];
    for(j = i - 1; j >= 0 && (arr[j] > temp); j--){
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
};
