const myInt = 5;
const myFloat = 6.667;
console.log(myInt);
console.log(myFloat);
console.log(typeof myInt);
console.log(typeof myFloat);

const lotsOfDecimal = 1.7665849587;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

let myNumber = "74";
myNumber += 3;
console.log(myNumber);
console.log(typeof myNumber);
myNumber = "74";
myNumber = Number(myNumber) + 3;
console.log(myNumber);
console.log(typeof myNumber);