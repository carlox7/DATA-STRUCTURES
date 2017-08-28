var stringTest = 'aaabcccca';

function compress(string) {
  var stringSplit = string.split('');
  var stringArray = [];
  var count = 0;
  for(let i = 0; i < stringSplit.length; i++) {
    if(stringSplit[i] !== stringSplit[i + 1]){
      stringArray.push(stringSplit[i]);
      stringArray.push(count + 1);
      count = 0;
    } else {
      count ++;
    }
  }
  var compressedString = stringArray.join('');
  if(compressedString.length > string.length){
    return string;
  }else {
    return compressedString;
  }
}

compress(stringTest);
