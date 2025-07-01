//union  pipe in type script
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum = combine(10, 20);
var combinedName = combine("garvit", "Rakhecha");
console.log(sum, combinedName);
// literal tyoes
function combine1(num1, num2, type1) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || type1 === "as-number") {
        result = +num1 + +num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine1(10, 20, "as-number");
var sum2 = combine1(10, 20, "as-number");
var combinedName1 = combine1("garvit", "Rakhecha", "as-string");
console.log(sum1, sum2, combinedName1);
function Hello(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        result = num1.toString() + num2.toString();
    }
    return result;
}
Hello(2, 3);
var user = {
    name: "Garvit",
    age: 21,
    skills: []
};
function greet(user) {
    console.log("Hello ".concat(user.name));
}
greet(user);
