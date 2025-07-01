"use strict";
// function return type
function add(num1, num2) {
    return num1 + num2;
}
const result = add(10, 20);
console.log(result);
function greeet(name) {
    console.log(`hello ${name}`);
}
greeet("garvit");
let combineFunction; // now combinefunction me function hi paas kar sakenge
combineFunction = add;
const addition = combineFunction(5, 2);
console.log(addition);
//good practices
let combineFunction1; // combinefunction me usi function ko daal sakte hai jo 2 numbers le rha hai and ek number return kar rha hia
combineFunction1 = add;
// combineFunction1 = greeet    yha error aayega
console.log(combineFunction1(10, 20));
// Function Type and Callbacks
function addHandle(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
addHandle(10, 20, (result) => {
    console.log(result);
});
