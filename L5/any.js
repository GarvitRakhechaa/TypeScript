"use strict";
let userInput;
let userName;
userInput = 10;
userInput = "garvit";
if (typeof userInput === "string") {
    userName = userInput;
}
//never return type
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
const res = generateError("Internal server Error", 500);
console.log(res);
