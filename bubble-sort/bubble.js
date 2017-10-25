'use strict';

module.exports = function bubbleSort(arr){
  for (var i = arr.length - 1; i >= 0; i--){
    for(var j = 1; j <= i; j++){
      if(arr[j - 1] > arr[j]){
        var temp = arr[ j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

module.exports = function bubbleSortDoWhile(arr){
  let arrCopy = arr.slice();
  let swap;

  do{
    swap = false;
    for(let i = 0; i < arr.length - 1; i++){
      if(arrCopy[i] > arrCopy[i + 1]){
        let temp = arrCopy[i];
        arrCopy[i] = arrCopy[i + 1];
        arrCopy[i + 1] = temp;
        swap = true;
      }
    }
  }
  while(swap);
  return arrCopy;
};
