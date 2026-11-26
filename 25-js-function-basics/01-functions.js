function add7(number) { 
    return number + 7;
}
console.log(add7(10));

function multiply(mult1, mult2) {
    return mult1 * mult2;
}
console.log(multiply(3,2));

function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));

function lastLetter(string) {
    return string.charAt(string.length-1);
}
console.log(lastLetter("abcd"));