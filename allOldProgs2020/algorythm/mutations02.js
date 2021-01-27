

// create a function
// create two variable and convert them in a new array making the string all lower case
// then make a loop to cycle through the array and check to see if all the character match
function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }