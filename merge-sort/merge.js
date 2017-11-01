'use strict';

module.exports = function mergeSort(arr){
  if(arr.length < 2)
    return arr;
  var mid = Math.floor(arr.length / 2),
    left = arr.slice(0,mid),
    right = arr.slice(mid);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  return merge(mergeSort(left),mergeSort(right));
};

module.exports = function merge(left, right){
  var result = [],
    l = 0,
    r = 0;
  while(l < left.length && r < right.length){
    if(left[l] < right[r]){
      result.push(left[l++]);
    }
    else{
      result.push(right[r++]);
    }
  }
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
};
