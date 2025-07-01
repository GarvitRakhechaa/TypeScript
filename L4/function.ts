// function return type

function add(num1:number, num2:number):number{
    return num1 + num2
}

const result : number = add(10,20)
console.log(result);


function greeet(name: string):void{
    console.log(`hello ${name}`);
}

greeet("garvit")

let combineFunction : Function // now combinefunction me function hi paas kar sakenge

combineFunction = add
const addition :number = combineFunction(5,2)
console.log(addition);


//good practices
let combineFunction1 : (a:number,b:number) => number // combinefunction me usi function ko daal sakte hai jo 2 numbers le rha hai and ek number return kar rha hia

combineFunction1 = add
// combineFunction1 = greeet    yha error aayega

console.log(combineFunction1(10,20));

// Function Type and Callbacks

function addHandle(num1:number, num2:number, cb: (n:number)=>void){
    const result = num1 + num2
    cb(result)
}

addHandle(10 ,20, (result)=> {
    console.log(result);
})