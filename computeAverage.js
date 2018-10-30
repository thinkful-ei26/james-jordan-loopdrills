'use strict';

function average(numbers){
    if(!Array.isArray(numbers)){
        return "Invalid parameter";
    }
    let sum = 0;
    numbers.forEach(element=> sum += element);
    return (sum /= numbers.length);
}

//test case
let testArray = [1, 2, 3, 4, 5];
console.log(`the average of ${testArray} is: ${average(testArray)}`);
let invalidArray = "Hi im not an array.";
console.log(average(invalidArray));