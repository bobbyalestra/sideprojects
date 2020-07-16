let arr = [[1, 8, 4, 1], [6, 2 , 7, 12], [21, 104, 19, 200, 7, 9]];
// first version of programm console.log odd for every odd number 
// second version console the total number of odd elements
// third console log the odd number is each sub array

var arr2 = [];
 
  for (let i = 0 ; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      
      if (arr[i][j] % 2 != 0 ) {
      console.log(arr[i][j], "Odd");
      arr2.push(arr[i][j]);
    }
  }
  }
console.log(arr2.length);
console.log(arr2)