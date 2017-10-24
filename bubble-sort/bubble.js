// 'use strict';
//
// module.exports = function bubbleSort(arr){
//   for (var i = arr.length - 1; i >= 0; i--){
//     for(var j = 1; j <= i; j++){
//       if(arr[j - 1] > arr[j]){
//         var temp = arr[ j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// };
//
// module.exports = function bubbleSortDoWhile(arr){
//   let arrCopy = arr.slice();
//   let swap;
//
//   do{
//     swap = false;
//     for(let i = 0; i < arr.length - 1; i++){
//       if(arrCopy[i] > arrCopy[i + 1]){
//         let temp = arrCopy[i];
//         arrCopy[i] = arrCopy[i + 1];
//         arrCopy[i + 1] = temp;
//         swap = true;
//       }
//     }
//   }
//   while(swap);
//   return arrCopy;
// };

// module.exports = bubbleSort;
let current = ['xxx', 'aaa', 'yyy', 'hij'];
let seen = [ ['aaa', 'bbb'], ['ccc', 'ddd', 'eee', 'fff'], ['ggg', 'hij', 'abc'] ];

function arrayFix(curr, sn){
  let newCurrent = [];
  let newStrings;

  let filterArray = sn.forEach(arr => {
    arr.forEach( val => {
      newCurrent.push(val);
    });
  });
  newStrings = current.filter( x => {
    return newCurrent.indexOf(x) === -1;
  });
  sn.splice(0,1);
  sn.push(newStrings);
  let newSeen = sn;
  return {newStrings, newSeen};
}

arrayFix(current, seen);
