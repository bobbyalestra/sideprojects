



function sumAll (arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let temp = 0;

    for (let i = min; i <= max; i++){
        temp =+ i;

       
    }
    console.log(...arr)
    console.log(temp)
    return temp;

}

sumAll([1,4]);
sumAll([5,4]);
sumAll([1,9]);
sumAll([2,8]);