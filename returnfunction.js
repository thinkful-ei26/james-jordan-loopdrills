
function hazardWarningCreator(typeOfWarning) {

    let warningCounter = 0; 

    return (function(location) {
        warningCounter += 1;
        return(`"DANGER! There is a ${typeOfWarning} hazard at ${location}! 
        "The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"`);
    });
}

const rocksWarning = hazardWarningCreator('Rocks');
const stormWarning = hazardWarningCreator('Hurricane');
const pizzaWarning = hazardWarningCreator('Pineapple');


console.log(rocksWarning("city center"));
console.log(rocksWarning("city center"));
console.log(rocksWarning("city center"));
console.log(pizzaWarning("the slice"));
console.log(pizzaWarning("the slice"));
console.log(stormWarning("at the docks"));
console.log(stormWarning("at the docks"));
console.log(stormWarning("at the docks"));
console.log(stormWarning("at the docks"));




