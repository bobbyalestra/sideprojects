 // fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811

 // current number plus previous number 


// will need a variable for the current number
// will need a variable for the previous number
// need to add the current and previous

function fibonacci(num){
    let arr = [0,1]

for (let i = 1; i < num; i++ ){
  arr.push(arr[i] + arr[i - 1])
}
console.log(arr)
}

fibonacci(10)