// Number , string, boolean
function add2(num1:number, num2:number, num3:boolean, someText:string): number | boolean {
    if(num3){
        console.log(`${someText}, ${num1 + num2}`);
         
    } 
    return num3
}

const num1 = 5
const num2 = 5
const printNumber = true
const someText = "this is some text"
const num3: boolean | number | string = add2(num1, num2, printNumber, someText)
