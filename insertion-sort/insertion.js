'use strict';

module.exports = function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let temp = arr[i];
    for(var j = i - 1; j >= 0 && (arr[j] > temp); j--){
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
};

// module.exports = function insertionSort(unsortedList) {
//   var len = unsortedList.length;
//   for (var i = 1; i < len; i++) {
//     var tmp = unsortedList[i];
//     for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
//       unsortedList[j + 1] = unsortedList[j];
//     }
//     console.log(unsortedList[j + 1]);
//     unsortedList[j + 1] = tmp;
//   }
// };
