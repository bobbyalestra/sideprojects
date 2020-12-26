function whatIsInAName(arrayObjectOne, objectTwo) {
    let object1 ="";
    let object2 = objectTwo;
    let string1 = "";
    let string2 = "";
    let finalArray = [];
    for (let i = 0; i < arrayObjectOne.length; i++) {
                // console.log(arrayObjectOne[i]);
                object1 = arrayObjectOne[i];
                string2 = JSON.stringify(object2)
                string2 = string2.substring(1, string2.length-1);
                // console.log(string2);
                string1 = JSON.stringify(object1);
                // console.log(typeof(string2));
                // console.log(typeof(string1));
                console.log(string2, string1);
                console.log(string1.includes(string2))
    }
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].