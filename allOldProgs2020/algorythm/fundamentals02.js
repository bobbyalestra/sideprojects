let arr = [[1, 8, 4, 1], [6, 2 , 7, 12], [21, 104, 19, 200, 7, 9]];
// first version of program console.log odd for every odd number 
// second version console the total number of odd elements
// third console log the odd number in each sub array
// fourth console log total sum of all the odd numbers

let arr2 = [];
 
  for (let i = 0 ; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      
      if (arr[i][j] % 2 != 0 ) {
        // logs each odd number in each sub array
        console.log('Numbers in sub-array :',arr[i][j], "Odd");
      arr2.push(arr[i][j]);
      } 
    }
        //  logs the sum of all the odd numbers in the array.
      let arraySum = arr2.reduce(function(a,b){
        return a + b;}, 0);
        console.log('Total Sum of All odd Numbers so far, is :',arraySum)      
      }
      console.log(arr2)
  // gives me how many odd numbers are in the array
  console.log('There are',arr2.length,'odd numbers');

let arraySum = arr2.reduce(function(a,b){
  return a + b;}, 0);
  console.log('Total Sum of All odd Numbers is :',arraySum)
    
  



