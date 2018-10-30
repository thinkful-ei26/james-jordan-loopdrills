'use strict';

function max(numbers) {

    if (numbers.length === 0) {
        return null;
    }

    //declaure a new variable that is set to the first value in array
    let max = numbers[0];
    let i = 0;
    //loop over with while loop to compare values to the max variable
    while (i < numbers.length) {
            if (numbers[i] > max) {
                max = numbers[i];
            };
            i++;
    }
    return max

}

    let array = []
    console.log(max(array))

    function min(numbers) {

        if (numbers.length === 0) {
            return null;
        }
    
        //declaure a new variable that is set to the first value in array
        let min = numbers[0];
        let i = 0;
        //loop over with while loop to compare values to the max variable
        while (i > numbers.length) {
                if (numbers[i] < min) {
                    min = numbers[i];
                };
                i++;
        }
        return min
    
    }

    let arrayMin = [1, 2, 3, 4]
    console.log(min(arrayMin))