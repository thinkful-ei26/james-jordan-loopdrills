/*
Use the map method to create a new array containing how many steps the turtle makes in total with each movement 
(i.e. the first and second number added together). //13

Use the forEach method to log out how many steps the turtle took in each case.*/ // 3, 5, 5

'use strict';
let testSample = [[1, 2], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]; // case 1

let filteredArray = testSample.filter(function (element){
    for(let i = 0; i < element.length; i++){
        if(element[i] <0 ){
            return false;
        }
        if(i === element.length -1){
        return true;
        }
    }//end for
});
console.log(`filtered Array is: ${filteredArray}`);
let filteredSteps = filteredArray.map(function(steps){
    return (steps[0] + steps[1]);
});
console.log(`turtle took in each steps: ${filteredSteps}`);
let totalSteps = 0;
filteredArray.forEach(function(steps){
    for(let i = 0; i < steps.length; i++){
    totalSteps += steps[i];
    }
    
});
console.log(`total steps is ${totalSteps}`);
//eachSteps.reduce((a, b)=> a+b);
//console.log(whatsGoingOn);
// let totalSteps = testSample.map();
//console.log(filteredSteps);
