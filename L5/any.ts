let userInput : unknown;
let userName : string;


userInput = 10
userInput  = "garvit"

if(typeof userInput === "string"){
    userName = userInput
}

//never return type

function generateError(message:string, code:number):never {
    throw {message: message, statusCode: code}
}

const res = generateError("Internal server Error", 500)
console.log(res);
