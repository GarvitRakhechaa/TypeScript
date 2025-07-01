// function return type
function add(num1, num2) {
    return num1 + num2;
}
var result = add(10, 20);
console.log(result);
function greeet(name) {
    console.log("hello ".concat(name));
}
greeet("garvit");
var combineFunction; // now combinefunction me function hi paas kar sakenge
combineFunction = add;
var addition = combineFunction(5, 2);
console.log(addition);
//good practices
var combineFunction1; // combinefunction me usi function ko daal sakte hai jo 2 numbers le rha hai and ek number return kar rha hia
combineFunction1 = add;
// combineFunction1 = greeet    yha error aayega
console.log(combineFunction1(10, 20));
// Function Type and Callbacks
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (result) {
    console.log(result);
});
